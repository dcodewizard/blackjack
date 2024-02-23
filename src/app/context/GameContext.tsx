"use client";

import { createContext, useState, useContext, useEffect } from "react";

import { Card } from "@/types";
import { drawCards, getDeck, shuffleCards } from "@/services/deckService";
import { calculateScore } from "@/utils/calculateScore";
import { GameContextProviderProps, GameContextType } from "@/types";
import { withTryCatch } from "@/utils/withTryCatch";
import { GAME_CONTEXT_ERROR } from "@/constants";

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [newGameBoolean, setNewGameBoolean] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [houseHand, setHouseHand] = useState<Array<Card>>([]);
  const [playerHand, setPlayerHand] = useState<Array<Card>>([]);
  const [houseScore, setHouseScore] = useState<number>(0);
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [deckId, setDeckId] = useState<string>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    withTryCatch({
      tryFunction: async () => {
        setError(null);
        setIsLoading(true);
        const {
          data: { deck_id },
        } = await getDeck();
        setDeckId(deck_id);
      },
      catchFunction: (error) => setError(error.message),
      finallyFunction: () => setIsLoading(false),
    });
  }, []);

  useEffect(() => {
    if (deckId)
      withTryCatch({
        tryFunction: async () => {
          setError(null);
          setIsLoading(true);
          await shuffleCards(deckId);
          const {
            data: { cards },
          } = await drawCards(deckId, 4);
          const houseCards = cards.slice(0, 2);
          const playerCards = cards.slice(2);
          setHouseHand(houseCards);
          setPlayerHand(playerCards);
          setPlayerScore(calculateScore(playerCards));
          setHouseScore(calculateScore(houseCards));
        },
        catchFunction: (error) => setError(error.message),
        finallyFunction: () => setIsLoading(false),
      });
  }, [deckId, newGameBoolean]);

  const value = {
    houseHand,
    playerHand,
    setPlayerHand,
    houseScore,
    playerScore,
    setPlayerScore,
    deckId,
    isLoading,
    error,
    setNewGameBoolean,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error(GAME_CONTEXT_ERROR);
  }
  return context;
};

export default GameContextProvider;

