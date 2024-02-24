"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle, CheckCircle2 } from "lucide-react";

import NewGameButton from "@/components/NewGameButton";
import { useGameContext } from "@/context/GameContext";
import { ModalProps } from "@/types";
import { END_GAME_TEXT, GAME_LOSE_TEXT, GAME_WIN_TEXT } from "@/constants";
import { routes } from "@/routes";

export const Modal = ({ open, setOpen, win }: ModalProps) => {
  const { setNewGameBoolean } = useGameContext();

  const handleGameResult = () => {
    setNewGameBoolean((oldValue) => !oldValue);
    setOpen(false);
  };

  return (
    open && (
      <>
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
              <div className="modal-title-container">
                <div className="modal-title">
                  {win ? <CheckCircle2 size={48} /> : <AlertCircle size={48} />}
                </div>
                <h3 className="modal-text">
                  {win ? GAME_WIN_TEXT : GAME_LOSE_TEXT}
                </h3>
                <NewGameButton onClick={handleGameResult} />
                <Link href={routes.home}>
                  <button
                    className="btn btn-dark ml-3"
                    onClick={handleGameResult}
                  >
                    {END_GAME_TEXT}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="backdrop"></div>
      </>
    )
  );
};

export default Modal;
