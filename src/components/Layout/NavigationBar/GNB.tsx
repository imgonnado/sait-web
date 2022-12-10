import Link from "next/link";

import styles from "./GNB.module.scss";

function GNB() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li className={styles.on}>
          <Link href="/">
            <a>
              <span className={styles.ico_home}>홈</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <a>
              <span className={styles.ico_search}>검색</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/alarm">
            <a>
              <span className={styles.ico_alarm}>알림</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/mypage">
            <a>
              <span className={styles.ico_my}>마이</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default GNB;
