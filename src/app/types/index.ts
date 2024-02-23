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
