"use client";

import { createContext, useState, useContext, useEffect } from "react";

import { Card } from "@/types";
import { calculateScore } from "@/utils/calculateScore";
import { GameContextProviderProps, GameContextType } from "@/types";
import { GAME_CONTEXT_ERROR } from "@/constants";
import { getDeckAction, startGameAction } from "@/api/deck/actions";

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
    getDeckAction({
      onSetup: () => {
        setError(null);
        setIsLoading(true);
      },
      onSuccess: (data) => setDeckId(data.deck_id),
      onFailure: (error) => setError(error.message),
      onCompletion: () => setIsLoading(false),
    });
  }, []);

  useEffect(() => {
    if (deckId) {
      startGameAction(deckId, {
        onSetup: () => {
          setError(null);
          setIsLoading(true);
        },
        onSuccess: ({ cards }) => {
          const houseCards = cards.slice(0, 2);
          const playerCards = cards.slice(2);
          setHouseHand(houseCards);
          setPlayerHand(playerCards);
          setPlayerScore(calculateScore(playerCards));
          setHouseScore(calculateScore(houseCards));
        },
        onFailure: (error) => setError(error.message),
        onCompletion: () => setIsLoading(false),
      });
    }
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
