"use client";

import { useMemo } from "react";

import CardImage from "@/components/CardImage";
import { LOADING_TEXT } from "@/constants";
import { HandProps, PlayerType } from "@/types";
import { useGameContext } from "@/context/GameContext";

const Hand = ({ player }: HandProps) => {
  const { playerHand, playerScore, houseHand, houseScore, error, isLoading } =
    useGameContext();

  const isHouse = useMemo(() => player === PlayerType.HOUSE, [player]);

  if (isLoading) return <p>{LOADING_TEXT}</p>;

  if (error) return <p className="error-text">{error}</p>;

  const cards = isHouse ? houseHand : playerHand;
  const score = isHouse ? houseScore : playerScore;

  return (
    <div className="hand">
      <div className="hand-cards">
        {cards.map((card) => (
          <CardImage key={card.code} src={card.image} />
        ))}
      </div>
      {!!score && (
        <p>
          {`${player}'s`} Score: <strong>{score}</strong>
        </p>
      )}
    </div>
  );
};

export default Hand;
