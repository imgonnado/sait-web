import Image from "next/image";
import { ReactElement } from "react";

import Accordion from "../../src/components/Accordion/Accordion";
import CommonLayout from "../../src/components/Layout/CommonLayout";
import None from "../../src/components/None/None";
import useAccordion from "../../src/hooks/useAccordion";

const announcements = [
  {
    type: "공지",
    title: "개인정보처리방침이 개정되었습니다.",
    content: `안녕하세요, 사잇입니다.
  3/24 오늘 11:00 ~ 12:00 까지 시스템 문제로 서비스 연결이 원활하지 않았습니다.
  현재 해당 문제는 복구가 완료되어, 고객센터 전화 연결이 가능합니다. 이용에 불편을 드려 죄송합니다. 안정적인 서비스 제공을 위하여 최선을 다하겠습니다.
  감사합니다.`,
    date: "1일전",
  },
  {
    type: "공지",
    title:
      "개인정보처리방침이 개정되었습니다.개인정보처리방침이 개정되었습니다.개인정보처리방침이 개정되었습니다.개인정보처리방침이 개정되었습니다.개인정보처리방침이 개정되었습니다.",
    content: `안녕하세요, 사잇입니다.
  3/24 오늘 11:00 ~ 12:00 까지 시스템 문제로 서비스 연결이 원활하지 않았습니다.
  현재 해당 문제는 복구가 완료되어, 고객센터 전화 연결이 가능합니다. 이용에 불편을 드려 죄송합니다. 안정적인 서비스 제공을 위하여 최선을 다하겠습니다.
  감사합니다.`,
    date: "1일전",
  },
  {
    type: "공지",
    title: "Announcement 3",
    content: `안녕하세요, 사잇입니다.
  3/24 오늘 11:00 ~ 12:00 까지 시스템 문제로 서비스 연결이 원활하지 않았습니다.
  현재 해당 문제는 복구가 완료되어, 고객센터 전화 연결이 가능합니다. 이용에 불편을 드려 죄송합니다. 안정적인 서비스 제공을 위하여 최선을 다하겠습니다.
  감사합니다.`,
    date: "1일전",
  },
  {
    type: "이벤트",
    title: "Announcement 4",
    content: `안녕하세요, 사잇입니다.
  3/24 오늘 11:00 ~ 12:00 까지 시스템 문제로 서비스 연결이 원활하지 않았습니다.
  현재 해당 문제는 복구가 완료되어, 고객센터 전화 연결이 가능합니다. 이용에 불편을 드려 죄송합니다. 안정적인 서비스 제공을 위하여 최선을 다하겠습니다.
  감사합니다.`,
    date: "1일전",
  },
];

function Announcement() {
  const [expandedIndex, handleClick] = useAccordion();

  return (
    <Accordion>
      {announcements.length === 0 ? (
        <div>
          <None
            image={
              <Image
                src="/asset/image/ico/ico_project.svg"
                alt="none"
                layout="fixed"
                width={80}
                height={80}
              />
            }
            text="공지사항이 없습니다."
          />
        </div>
      ) : (
        announcements.map(announcement => {
          return (
            <Accordion.Item
              key={announcement.date}
              expandedIndex={expandedIndex}
              index={announcements.indexOf(announcement)}
            >
              <Accordion.Heading
                type={announcement.type}
                title={announcement.title}
                date={announcement.date}
                index={announcements.indexOf(announcement)}
                handleClick={handleClick}
              />
              <Accordion.Panel>{announcement.content}</Accordion.Panel>
            </Accordion.Item>
          );
        })
      )}
    </Accordion>
  );
}

export default Announcement;

Announcement.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout header={false}>{page}</CommonLayout>;
};
