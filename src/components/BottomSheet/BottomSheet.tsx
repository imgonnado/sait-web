import { useState } from "react";
import clsx from "clsx";

import styles from "./BottomSheet.module.scss";

interface BottomSheetProps {}

function BottomSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.select_area}>
      <button type="button" className={styles.select} onClick={onOpen}>
        <span className={styles.select_placeholder}>
          알림 방식을 선택하세요.
        </span>
        <span className={styles.select_value}>디자이너</span>
      </button>

      {/* popup */}
      <dialog
        open={isOpen}
        className={clsx(styles.select_popup, isOpen && styles.on)}
        id="select_1"
        // 취소가 트리거된 곳이 여기면 class에 on을 지운다.
      >
        <div className={styles.popup}>
          <strong className={styles.select_title}>모집 알람 해지</strong>
          <div className={styles.select_content}>
            <ul>
              <li />
            </ul>
            <div className={styles.btn_area}>
              <button
                type="button"
                className={clsx(styles.btn, styles.light)}
                onClick={onClose}
              >
                취소
              </button>
              <button type="button" onClick={onClose}>
                확인
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default BottomSheet;
