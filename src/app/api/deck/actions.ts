import { drawCards, getDeck, shuffleCards } from "@/api/deck/endpoints";
import { apiCall } from "@/utils/apiCall";
import { APICallArgsType } from "@/types";

export const getDeckAction = (actionArgs: APICallArgsType) =>
  apiCall(getDeck, actionArgs);

export const startGameAction = (
  deckId: string,
  actionArgs: APICallArgsType
) => {
  const combinedAPIs = async () => {
    await shuffleCards(deckId);
    return drawCards(deckId, 4);
  };
  apiCall(combinedAPIs, actionArgs);
};

export const drawCardsAction = (
  deckId: string,
  actionArgs: APICallArgsType
) => {
  const apiSetup = async () => await drawCards(deckId);
  apiCall(apiSetup, actionArgs);
};
