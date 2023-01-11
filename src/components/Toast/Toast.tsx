import clsx from "clsx";

import styles from "./Toast.module.scss";

export interface ToastMessageParams {
  show?: boolean;
  title?: string;
}

function ToastMessage({ show = false, title }: ToastMessageParams) {
  return (
    <div className={clsx(styles.toast, show && styles.fadeOut)}>
      <div className={clsx(styles.toastInner, !show && styles.hide)}>
        <p className={styles.toastTitle}>{title}</p>
      </div>
    </div>
  );
}

export default ToastMessage;
