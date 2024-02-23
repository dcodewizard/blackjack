import { NEW_GAME_TEXT } from "@/constants";
import { NewGameButtonProps } from "@/types";

const NewGameButton = ({ onClick }: NewGameButtonProps) => (
  <button className="btn btn-error" onClick={onClick}>
    {NEW_GAME_TEXT}
  </button>
);

export default NewGameButton;
