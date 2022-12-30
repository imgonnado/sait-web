import styles from "./BottomSheet.module.scss";

function BottomSheet() {
  return (
    <div className={styles.select_area}>
      <button type="button" className={styles.select}>
        <span className={styles.select_placeholder}>
          알림 방식을 선택하세요.
        </span>
        <span className={styles.select_value}>디자이너</span>
      </button>
      {/* bottom sheet */}
    </div>
  );
}

export default BottomSheet;
