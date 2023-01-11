import { ReactNode } from "react";
import clsx from "clsx";

import ButtonArea from "../Button/ButtonArea";
import styles from "./PopUp.module.scss";

interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Title({ children }: { children: ReactNode }) {
  return <strong className={styles.popupTitle}>{children}</strong>;
}

function Content({ children }: { children: ReactNode }) {
  return <p className={styles.popupContent}>{children}</p>;
}

function PopUp({ isOpen, onClose, children }: PopUpProps) {
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
        {children}
      </dialog>
    </>
  );
}

PopUp.Title = Title;
PopUp.Content = Content;
PopUp.ButtonArea = ButtonArea;

export default PopUp;
