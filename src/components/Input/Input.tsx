import { useState } from "react";
import Image from "next/image";

import styles from "./Input.module.scss";

interface InputProps {
  disabled?: boolean;
}

function Input({ disabled = false }: InputProps) {
  const [inputOutline] = useState("#004eff"); // #ff0000

  return (
    <>
      <input
        type="text"
        placeholder="텍스트를 입력해 주세요"
        className={styles.input}
        style={{ outlineColor: inputOutline }}
        disabled={disabled}
      />
      <div className={styles.errMsg}>
        <span className={styles.errMsg_IcnTooltip}>
          <Image
            src="/asset/image/ico/icn_tooltip.svg"
            width={16}
            height={16}
            alt="tooltip"
          />
        </span>
        이메일 주소를 입력해주세요.
      </div>
    </>
  );
}

export default Input;
