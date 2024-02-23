"use client";

import { useMemo } from "react";

import CardImage from "@/components/CardImage";
import { LOADING_TEXT } from "@/constants";
import { HandProps, PlayerType } from "@/types";

const Hand = ({ player }: HandProps) => {
  const isHouse = useMemo(() => player === PlayerType.HOUSE, [player]);

  return (
    <div className="hand">
      <div className="hand-cards"></div>
    </div>
  );
};

export default Hand;
