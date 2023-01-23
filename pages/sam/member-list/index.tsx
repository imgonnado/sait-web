import { ReactElement } from "react";

import CommonLayout from "../../../src/components/Layout/CommonLayout";
import MemberList from "../../../src/components/ProjectList/MemberList";

function Index() {
  const memberListData = [
    {
      id: 1,
      image: "/asset/image/temp/temp_project_list.jpg",
      url: "",
      name: "이동수",
      content: `개발자 영화와 드라마를 영화와 개발자 영화와 드라마를 영화와`,
      career: "1년차",
      profession: "UIUX 디자인",
      ico: "/asset/image/ico/ico_design.svg",
    },
    {
      id: 2,
      image: "",
      url: "",
      name: "이동수",
      content: `개발자 영화와 드라마를 영화와 개발자 영화와 드라마를 영화와`,
      career: "3년차",
      profession: "개발자",
      ico: "/asset/image/ico/ico_coding.svg",
    },
    {
      id: 3,
      image: "",
      url: "",
      name: "이동수",
      content: `개발자 영화와 드라마를 영화와 개발자 영화와 드라마를 영화와`,
      career: "6년차",
      profession: "웹기획자",
      ico: "/asset/image/ico/ico_planning.svg",
    },
  ];

  const memberRowListData = [
    {
      id: 1,
      image: "/asset/image/temp/temp_project_list.jpg",
      url: "",
      name: "이동수",
      profession: "UIUX 디자인",
      ico: "/asset/image/ico/ico_design.svg",
    },
    {
      id: 2,
      image: "",
      url: "",
      name: "이동수",
      profession: "개발자",
      ico: "/asset/image/ico/ico_coding.svg",
    },
    {
      id: 3,
      image: "",
      url: "",
      name: "이동수",
      profession: "웹기획자",
      ico: "/asset/image/ico/ico_planning.svg",
    },
    {
      id: 4,
      image: "/asset/image/temp/temp_project_list.jpg",
      url: "",
      name: "이동수",
      profession: "UIUX 디자인",
      ico: "/asset/image/ico/ico_design.svg",
    },
  ];

  return (
    <>
      <MemberList data={memberListData} />
      <div style={{ height: "100px" }} />
      <MemberList type="row" data={memberRowListData} />
    </>
  );
}

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout>{page}</CommonLayout>;
};
