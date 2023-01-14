import { ReactElement } from "react";
import Link from "next/link";

import CommonLayout from "../../../src/components/Layout/CommonLayout";
import Text from "../../../src/components/Typography/Text";

import styles from "./Notification.module.scss";

const SETTING_NOTIFICATION_LIST = [
  {
    title: "활동 알림 설정",
    content:
      "모집 및 초대 알림 등 사잇 필수 공지 등 꼭 필요한 것만 알려드려요.",
    link: "/setting/notification",
  },
  {
    title: "모집 알림 설정",
    content: "프로젝트 모집 글에 댓글이 달리거나 참여 신청시 알림",
    link: "/setting/inquiry",
  },
  {
    title: "프로젝트 알림 설정",
    content: "참여 신청한 프로젝트에 승인 및 거절, 대기 되었을 때 알림",
    link: "/setting/privacy",
  },
  {
    title: "초대 알림 설정",
    content: "프로젝트에 초대되거나 초대한 사람이 프로젝트에 참여했을 때 알림",
    link: "/setting/terms",
  },
  {
    title: "키워드 알림 설정",
    content: "미리 설정한 관심 키워드로 사프 모집글이 새로 등록 되었을 시 알림",
    link: "/setting/withdrawal",
  },
  {
    title: "마케팅 알림 설정",
    content: "사잇 이벤트 및 신규소식 등 마케팅 수신 관련 알림",
    link: "/setting/logout",
  },
];

function Index() {
  return (
    <div className={styles.notification}>
      {SETTING_NOTIFICATION_LIST.map(({ title, content, link }) => (
        <Link href={link}>
          <a className={styles.listItem}>
            <div className={styles.textWrapper}>
              <Text size="md" fw="medium" className={styles.listItemTitle}>
                {title}
              </Text>
              <Text size="md" fw="demiLight" className={styles.listItemContent}>
                {content}
              </Text>
            </div>
            <div className={styles.btnWrapper}>
              {/* checkboxToggle 임시 적용 */}
              <input
                type="checkbox"
                className={styles.checkboxToggle}
                id="checkboxToggleId"
                name="checkboxToggle"
                checked
              />
            </div>
          </a>
        </Link>
      ))}
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
