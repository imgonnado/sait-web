import { useState } from "react";
import styles from "./InputSearch.module.scss";

interface InputSearchProps {
  disabled?: boolean;
}

function InputSearch({ disabled = false }: InputSearchProps) {
  return (
    <input
      type="search"
      placeholder="검색어를 입력해 주세요"
      className={styles.inputSearch}
      disabled={disabled}
    />
  );
}

export default InputSearch;
