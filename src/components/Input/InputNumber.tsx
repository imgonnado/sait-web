import { useState, useRef } from "react";
import clsx from "clsx";

import styles from "./InputNumber.module.scss";

interface InputNumberProps {
  disabled?: boolean;
}

function InputNumber({ disabled = false }: InputNumberProps) {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <span className={styles.inputNumberSet}>
      <button
        type="button"
        className={clsx(styles.minus, count == 0 && styles.stop)}
        onClick={handleDecrement}
        disabled={disabled}
      ></button>
      <input
        type="number"
        placeholder="0"
        className={styles.inputNumber}
        disabled={disabled}
        value={count}
      />
      <button
        type="button"
        className={styles.plus}
        onClick={handleIncrement}
        disabled={disabled}
      ></button>
    </span>
  );
}

export default InputNumber;
