import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import styles from "./LimitedTextarea.module.scss";

interface LimitedTextareaProps {
  rows?: number;
  cols?: number;
  minInput: number;
  maxInput: number;
  disabled?: boolean;
}

function LimitedTextarea({
  minInput,
  maxInput,
  disabled = false,
}: LimitedTextareaProps) {
  const [textareaCounter, setTextareaCounter] = useState(0);
  const [textareaCounterColor, setTextareaCounterColor] = useState("#999999");
  const [textareaOutline, setTextareaOutline] = useState("#004eff");
  const [cont, setCont] = useState("");

  const handleTextareaCount = (content: string) => {
    setTextareaCounter(content.length);

    setCont(content.replace(/  +/g, " "));

    setTextareaCounterColor(content.length >= 1 ? "#292929" : "#999999");
    setTextareaOutline(
      content.length > 0 && content.length < minInput ? "#ff0000" : "#004eff"
    );
  };

  function comma(str: number | string) {
    return String(str).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <div>
      <div className={styles.textarea}>
        <textarea
          placeholder="내용을 입력해주세요"
          aria-describedby="textCounter"
          value={cont}
          maxLength={maxInput}
          onChange={event => handleTextareaCount(event.target.value)}
          className={styles.limitedTextarea}
          style={{ outlineColor: textareaOutline }}
          disabled={disabled}
        />

        <span
          aria-live="polite"
          id="textCounter"
          className={clsx(
            styles.textarea_textCounter,
            disabled && styles["textarea_textCounter--disabled"]
          )}
        >
          <span
            style={{ color: disabled ? "#d9d9d9" : `${textareaCounterColor}` }}
          >
            {textareaCounter}
          </span>
          /{comma(maxInput)}자
        </span>
      </div>
      {cont.length > 0 && cont.length < minInput && (
        <div className={styles.errMsg}>
          <span className={styles.errMsg_IcnTooltip}>
            <Image
              src="/asset/image/ico/ico_tooltip.svg"
              width={16}
              height={16}
              alt="tooltip"
            />
          </span>
          10자이상으로 입력해주세요.
        </div>
      )}
    </div>
  );
}

export default LimitedTextarea;
