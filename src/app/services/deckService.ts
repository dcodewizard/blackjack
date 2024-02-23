import axios from "@/services/axios";

export const getDeck = async () => axios.get("/new/shuffle/?deck_count=1");

export const drawCards = async (deckId: string, count = 1) =>
  axios.get(`/${deckId}/draw/?count=${count}`);

export const shuffleCards = async (deckId: string) =>
  axios.get(`/${deckId}/shuffle`);
