import { css } from "@emotion/react";
import { ReactElement } from "react";
import tw from "twin.macro";
import Image from "next/image";

import CommonLayout from "../src/components/Layout/CommonLayout";
import ProjectList from "../src/components/ProjectList/ProjectList";
import Button from "../src/components/Button/Button";

function App() {
  const projectListData = [
    {
      id: 1,
      // 이미지
      image: "/asset/image/temp/temp_project_list.jpg",
      // 제목
      title: `앱개발 초기 팀원 모집 / 스터디가능 앱 개발 초기 팀원앱 개발
                  초기기 / 스터디가능 앱 개발 초기 팀원앱 개발 초기기 /
                  스터디가능 앱 개발 초기 팀원앱 개발 초기기`,
      // 태그들
      tag: "태그",
      // 키워드들, /search/[:keyword]
      keywords: [
        {
          en: "english",
          ko: "한글",
        },
        {
          en: "english",
          ko: "한글",
        },
        {
          en: "english",
          ko: "한글",
        },
        {
          en: "english",
          ko: "한글",
        },
        {
          en: "english",
          ko: "한글",
        },
      ],
      // 멤버리스트(id, image, name), 4개 이상은 + 버튼
      members: [
        {
          id: 1,
          image: "/asset/image/temp/temp_project_list.jpg",
          name: "이름",
        },
        {
          id: 2,
          image: "/asset/image/temp/temp_project_list.jpg",
          name: "이름",
        },
        {
          id: 3,
          image: "/asset/image/temp/temp_project_list.jpg",
          name: "이름",
        },
        {
          id: 4,
          image: "/asset/image/temp/temp_project_list.jpg",
          name: "이름",
        },
      ],
      // status:Enum type (모집중, 모집완료, 진행중, 완료)
      // 멤버 리스트 옆 status에 대한 아이콘
      status: 0,
      // 좋아요
      like: 1,
      maxMember: 40,
    },
  ];

  return (
    <div
      css={[
        tw`block`,
        css`
          display: block;
        `,
      ]}
    >
      <ProjectList data={projectListData} />
      <Button theme="secondary" as="a" href="www.google.com" disabled>
        버튼
        <Image
          src="/asset/image/ico/ico_bell.svg"
          layout="fixed"
          height="24px"
          width="24px"
        />
      </Button>
      <Button theme="secondary" as="button" disabled>
        버튼
        <Image
          src="/asset/image/ico/ico_bell.svg"
          layout="fixed"
          height="24px"
          width="24px"
          style={{ marginLeft: 5 }}
        />
      </Button>
    </div>
  );
}

export default App;

App.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout>{page}</CommonLayout>;
};
