import { ReactElement } from "react";

import CommonLayout from "../../../src/components/Layout/CommonLayout";
import PointsToNote from "../../../src/components/PointsToNote/PointsToNote";

const dummyData = [
  {
    id: 1,
    content:
      "하루가 지나도 문의 답변이 없는 경우, 입력하신 이메일 주소 및 이메일의 스팸 메일함을 확인해 주세요.",
  },
  {
    id: 2,
    content: "탈퇴 시 동일 계정 및 닉네임으로는 재가입이 불가능합니다.",
  },
  {
    id: 3,
    content:
      "탈퇴 시 참여 프로젝트 및 부캐 정보, 받은 평가, 내프로필 사진, 좋아요 내역 등 모든 이용 내역이 삭제됩니다. 삭제된 데이터는 복구가 불가능합니다.",
  },
  {
    id: 4,
    content: "서비스를 이용하며 남긴 댓글은 삭제되지 않습니다.",
  },
  {
    id: 5,
    content: "탈퇴 처리 및 계정 삭제는 탈퇴 신청 일로부터 3일 후 진행됩니다.",
  },
];

const dummyData2 = [
  {
    id: 10,
    content: "서비스를 이용하며 남긴 댓글은 삭제되지 않습니다.",
  },
  {
    id: 11,
    content: "탈퇴 처리 및 계정 삭제는 탈퇴 신청 일로부터 3일 후 진행됩니다.",
  },
];

function Index() {
  return (
    <>
      <PointsToNote title="유의사항" data={dummyData} />
      <div style={{ height: "100px" }} />
      <PointsToNote data={dummyData2} />
    </>
  );
}

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout header={false}>{page}</CommonLayout>;
};
