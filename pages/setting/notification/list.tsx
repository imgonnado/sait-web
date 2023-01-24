import { ReactElement } from "react";
import Link from "next/link";

import CommonLayout from "../../../src/components/Layout/CommonLayout";
import Text from "../../../src/components/Typography/Text";

import styles from "./Notification.module.scss";

const SETTING_NOTIFICATION_LIST = [
  {
    alarm: "관심 키워드 카테고리에 새로운 새로운 프로로프로젝트가 생겼어요! ",
    date: "오늘",
    link: "/setting/notification",
  },
  {
    alarm: "모집하는 프로젝트에 댓글이 달렸어요! ",
    date: "2일 전",
    link: "/setting/inquiry",
  },
  {
    alarm: "대기중인 프로젝트에 댓글이 달렸어요!",
    date: "5일 전",
    link: "/setting/privacy",
  },
  {
    alarm: "대기중인 프로젝트에 댓글이 달렸어요! ",
    date: "1주일 전",
    link: "/setting/terms",
  },
  {
    alarm: "관심 키워드 카테고리에 새로운 새로운 프로로프로젝트가 생겼어요! ",
    date: "2주일 전",
    link: "/setting/withdrawal",
  },
  {
    alarm: "모집하는 프로젝트에 댓글이 달렸어요! ",
    date: "2주일 전",
    link: "/setting/logout",
  },
];

function Index() {
  return (
    <div className={styles.alarmList}>
      <ul>
        {SETTING_NOTIFICATION_LIST.map(({ alarm, date, link }) => (
          <li className={styles.alarm}>
            <Link href={link}>
              <a className={styles.text}>{alarm}</a>
            </Link>
            <span className={styles.date}>{date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <CommonLayout header={false} mainClassName={styles.main}>
      {page}
    </CommonLayout>
  );
};
