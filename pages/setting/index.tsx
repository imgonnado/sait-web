import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

import CommonLayout from "../../src/components/Layout/CommonLayout";
import Text from "../../src/components/Typography/Text";

import styles from "./Setting.module.scss";

const SETTING_LIST = [
  {
    title: "알림 설정",
    link: "/setting/notification",
  },
  {
    title: "1:1 문의",
    link: "/setting/inquiry",
  },
  {
    title: "개인정보 보호 지침",
    link: "/setting/privacy",
  },
  {
    title: "이용약관동의",
    link: "/setting/terms",
  },
  {
    title: "회원탈퇴",
    link: "/setting/withdrawal",
  },
  {
    title: "로그아웃",
    link: "/setting/logout",
  },
];

function Index() {
  return (
    <>
      {SETTING_LIST.map(({ title, link }) => (
        <Link href={link}>
          <a className={styles.listItem}>
            <Text>{title}</Text>
          </a>
        </Link>
      ))}
    </>
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
