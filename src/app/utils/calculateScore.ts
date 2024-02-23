import { Card } from "@/types";
import { FACE_CARD_VALUES, ACE_CARD_VALUE } from "@/constants";

export const calculateScore = (cards: Card[]) => {
  let score = 0;
  let numAces = 0;
  for (let card of cards) {
    if (FACE_CARD_VALUES.includes(card.value)) {
      score += 10;
    } else if (card.value === ACE_CARD_VALUE) {
      score += 11;
      numAces += 1;
    } else {
      score += Number(card.value);
    }
  }
  while (score > 21 && numAces > 0) {
    score -= 10;
    numAces--;
  }
  return score;
};
