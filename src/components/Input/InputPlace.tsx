import { useState } from "react";
import styles from "./InputPlace.module.scss";

interface InputPlaceProps {
  disabled?: boolean;
}

function InputPlace({ disabled = false }: InputPlaceProps) {
  return (
    <>
      <input
        type="text"
        placeholder="장소를 선택해주세요."
        className={styles.inputPlace}
        disabled={disabled}
      />
      {/* <div>팝업들어갈 자리</div> */}
    </>
  );
}

export default InputPlace;
