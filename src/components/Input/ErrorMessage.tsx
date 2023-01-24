import Image from "next/image";

import styles from "./Input.module.scss";

interface ErrorMessageProps {
  children: string;
}

function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <div className={styles.errMsg}>
      <span className={styles.errMsg_IcoTooltip}>
        <Image
          src="/asset/image/ico/ico_tooltip.svg"
          width={16}
          height={16}
          alt="tooltip"
        />
      </span>
      {children}
    </div>
  );
}

export default ErrorMessage;
