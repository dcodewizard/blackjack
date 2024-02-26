import { SetStateAction, Dispatch } from "react";

export type NewGameButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export enum PlayerType {
  PLAYER = "Player",
  HOUSE = "House",
}

export type Card = {
  code: string;
  image: string;
  images: string[];
  value: string;
  suit: string;
};

export type CardImageProps = {
  src: string;
};

export type HandProps = {
  player: PlayerType;
};

export type GameContextType = {
  houseHand: Card[];
  playerHand: Card[];
  houseScore: number;
  playerScore: number;
  setPlayerScore: Dispatch<SetStateAction<Number>>;
  setPlayerHand: Dispatch<SetStateAction<Card[]>>;
  setNewGameBoolean: Dispatch<SetStateAction<boolean>>;
  deckId: string;
  isLoading: boolean;
  error: string | null;
};

export type GameContextProviderProps = {
  children: React.ReactNode;
};

export type withTryCatchType = {
  tryFunction: () => Promise<any>;
  catchFunction?: (e: any) => void | null | undefined;
  finallyFunction?: () => void | undefined;
};

export type ModalProps = {
  win: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<Boolean>>;
};

export type APICallArgsType = {
  onSetup?: () => void;
  onSuccess: (data: any) => void;
  onFailure?: (error: any) => void;
  onCompletion?: () => void;
};

export type APIFunctionType = () => Promise<any>;
