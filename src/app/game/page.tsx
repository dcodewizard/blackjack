"use client";

import { useState } from "react";

import Hand from "@/components/Hand";
import { PlayerType } from "@/types";
import { GAME_NAME, HITTING_TEXT, HIT_TEXT, STAND_TEXT } from "@/constants";

const Game = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isHitting, setIsHitting] = useState<boolean>(false);

  const handleStand = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className="game-board">
        <Hand player={PlayerType.HOUSE} />
        <div className="btn-arena">
          <button className="btn btn-success">
            {isHitting ? HITTING_TEXT : HIT_TEXT}
          </button>
          <p className="blackjack-text">{GAME_NAME}</p>
          <button className="btn btn-warning" onClick={handleStand}>
            {STAND_TEXT}
          </button>
        </div>
        <Hand player={PlayerType.PLAYER} />
      </div>
    </>
  );
};

export default Game;
