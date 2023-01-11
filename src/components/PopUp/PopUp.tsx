import { ReactNode } from "react";
import clsx from "clsx";

import ButtonArea from "../Button/ButtonArea";
import styles from "./PopUp.module.scss";

interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
  buttons: ReactNode | ReactNode[];
}

function PopUp({ isOpen, onClose, title, content, buttons }: PopUpProps) {
  return (
    <>
      {isOpen && (
        <div
          id="overlay"
          onClick={onClose}
          className={clsx(styles.popup, isOpen && styles.on)}
          role="presentation"
        />
      )}
      <dialog open={isOpen} className={styles.popupInner}>
        <strong className={styles.popupTitle}>{title}</strong>
        <p className={styles.popupContent}>{content}</p>
        <ButtonArea>{buttons}</ButtonArea>
      </dialog>
    </>
  );
}

export default PopUp;
