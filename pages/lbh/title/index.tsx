import { ReactElement } from "react";

import CommonLayout from "../../../src/components/Layout/CommonLayout";
import Heading from "../../../src/components/Typography/Heading";
import Text from "../../../src/components/Typography/Text";

function Index() {
  return (
    <>
      {/* 권한설정타이틀 */}
      <Heading
        as="h1"
        size="2xl"
        fw="medium"
        style={{ width: 200, color: "black" }}
      >
        앱 사용을 위해 권한을 허용해주세요
      </Heading>

      {/* 부캐설정타이틀 */}
      <Heading size="2xl" fw="medium" style={{ width: 146 }}>
        안녕, 반가워요
      </Heading>
      <Text fw="demiLight" style={{ width: 236 }}>
        본캐 프로필을 완성하고 본업을 떠나 사이드 프로젝트의 세계로 입장!
      </Text>

      {/* 모집타이틀 */}
      <Text fw="medium">멤버 추가하기</Text>
      <Text
        size="md"
        fw="demiLight"
        color="darkgray"
        style={{ width: 320, fontWeight: 100 }}
      >
        기존에 프로젝트를 함께 진행하고 있는 멤버가 있다면 초대 및 추가
        해주세요.
      </Text>

      {/* 로그인타이틀 */}
      <Heading size="3xl" fw="medium" style={{ width: 213 }}>
        오늘도 평화로운 잇(IT)한 사람들의 사이드 공간
      </Heading>
    </>
  );
}

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout>{page}</CommonLayout>;
};
