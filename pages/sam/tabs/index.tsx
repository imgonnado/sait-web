import { ReactElement } from "react";

import CommonLayout from "../../../src/components/Layout/CommonLayout";
import Text from "../../../src/components/Typography/Text";
import Tab from "../../../src/components/Tab/Tab";
import KeywordTab from "../../../src/components/Tab/KeywordTab";

function Index() {
  const keywordTabData = [
    {
      id: 1,
      keywords: "JavaScript",
    },
    {
      id: 2,
      keywords: "React",
    },
    {
      id: 3,
      keywords: "Spring",
    },
    {
      id: 4,
      keywords: "Java",
    },
    {
      id: 5,
      keywords: "JavaScript",
    },
    {
      id: 6,
      keywords: "React",
    },
    {
      id: 7,
      keywords: "Spring",
    },
    {
      id: 8,
      keywords: "Java",
    },
    {
      id: 9,
      keywords: "Spring",
    },
    {
      id: 10,
      keywords: "Java",
    },
  ];

  return (
    <>
      <Tab>
        <li>
          <a href="/layout/layout_2.html">
            <span>메인</span>
          </a>
        </li>
        <li className="on">
          <a href="/layout/layout.html">
            <span>레이아웃</span>
          </a>
        </li>
        <li>
          <a href="/guide.html">
            <span>가이드</span>
          </a>
        </li>
      </Tab>
      <KeywordTab data={keywordTabData} />
    </>
  );
}

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout>{page}</CommonLayout>;
};
