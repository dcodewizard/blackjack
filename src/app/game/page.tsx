"use client";

import { useMemo, useState } from "react";

import Modal from "@/components/Modal";
import Hand from "@/components/Hand";
import { useGameContext } from "@/context/GameContext";
import { calculateScore } from "@/utils/calculateScore";
import { GAME_NAME, HITTING_TEXT, HIT_TEXT, STAND_TEXT } from "@/constants";
import { PlayerType } from "@/types";
import { drawCardsAction } from "@/api/deck/actions";

const Game = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isHitting, setIsHitting] = useState<boolean>(false);

  const {
    deckId,
    playerScore,
    houseScore,
    setPlayerHand,
    setPlayerScore,
    playerHand,
    isLoading,
    error,
  } = useGameContext();

  const handleHit = async () => {
    drawCardsAction(deckId, {
      onSetup: () => setIsHitting(true),
      onSuccess: ({ cards }) => {
        const updatedPlayerHand = [...playerHand, cards[0]];
        const updatedScore = calculateScore(updatedPlayerHand);
        setPlayerHand(updatedPlayerHand);
        setPlayerScore(updatedScore);

        if (updatedScore > 21) setModalOpen(true);
      },
      onCompletion: () => setIsHitting(false),
    });
  };

  const handleStand = () => {
    setModalOpen(true);
  };

  const isDisabled = useMemo(
    () => isHitting || isLoading || !!error,
    [error, isLoading, isHitting]
  );

  return (
    <>
      <div className="game-board">
        <Hand player={PlayerType.HOUSE} />
        <div className="btn-arena">
          <button
            className="btn btn-success"
            onClick={handleHit}
            disabled={isDisabled}
          >
            {isHitting ? HITTING_TEXT : HIT_TEXT}
          </button>
          <p className="blackjack-text">{GAME_NAME}</p>
          <button
            className="btn btn-warning"
            onClick={handleStand}
            disabled={isDisabled}
          >
            {STAND_TEXT}
          </button>
        </div>
        <Hand player={PlayerType.PLAYER} />
      </div>
      <Modal
        win={playerScore > houseScore && playerScore <= 21}
        open={modalOpen}
        setOpen={setModalOpen}
      />
    </>
  );
};

export default Game;
