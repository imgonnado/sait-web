import Image from "next/image";
import clsx from "clsx";

import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.headerArea}>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <a href="./layout_2.html">
            <Image
              src="/asset/image/ico/logo.svg"
              layout="fixed"
              width={108}
              height={24}
            />
          </a>
        </h1>
        {/* <!-- <h2 className="title">메인</h2> --> */}
        <span className={styles.tool}>
          <button
            type="button"
            className={clsx(styles.btnIcon, styles.ico_writing)}
          >
            <span className={styles.hiddenText}>글쓰기</span>
          </button>
          {/* <!-- <button className="btnIcon ico_setting"><span className="hiddenText">설정</span></button>
                    <button className="btnIcon ico_more"><span className="hiddenText">더보기</span></button>
                    <button className="btnText">임시저장</button> --> */}
        </span>
      </header>
      {/* <!-- <header className="header left">
                <h2 className="title">왼쪽정렬 타이틀</h2>
                <span className="tool">
                    <button className="btnIcon"><span className="hiddenText">북마크</span></button>
                    <button className="btnIcon"><span className="hiddenText">설정</span></button>
                </span>
            </header> --> */}
    </div>
  );
}

export default Header;
