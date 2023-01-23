import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import ButtonArea from "../Button/ButtonArea";

import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function ModalButtonArea({ children }: { children: React.ReactNode }) {
  return <ButtonArea>{children}</ButtonArea>;
}

function Modal({ isOpen, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [, forceUpdate] = useState({});
  useEffect(() => {
    if (!document) return;

    modalRef.current = document.createElement("div") as HTMLDivElement;
    modalRef.current.id = "modal-root";
    document.body.appendChild(modalRef.current);
    forceUpdate({});

    return () => {
      if (modalRef.current) {
        document.body.removeChild(modalRef.current);
      }
    };
  }, []);

  return (
    modalRef.current &&
    createPortal(
      <dialog
        open={isOpen}
        className={clsx(styles.modal, isOpen && styles.open)}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </dialog>,
      modalRef.current
    )
  );
}

Modal.ButtonArea = ModalButtonArea;

export default Modal;
