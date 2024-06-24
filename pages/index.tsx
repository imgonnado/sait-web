import { ReactElement, useEffect } from "react";
import tw from "twin.macro";

import Input from "../src/components/Input/Input";
import CommonLayout from "../src/components/Layout/CommonLayout";
import ProjectList from "../src/components/ProjectList/ProjectList";
import LimitedTextarea from "../src/components/Textarea/LimitedTextarea";
import PopUp from "../src/components/PopUp/PopUp";
import useDisclosure from "../src/hooks/useDisclosure";
import Toast from "../src/components/Toast/Toast";
import Button from "../src/components/Button/Button";
import ButtonArea from "../src/components/Button/ButtonArea";
import ToastMessage from "../src/components/Toast/ToastMessage";
import ErrorMessage from "../src/components/Input/ErrorMessage";

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

  // usePopup
  const {
    isOpen: isOpenPopUp,
    onOpen: onOpenPopUp,
    onClose: onClosePopUp,
  } = useDisclosure();

  // useToast
  const {
    isOpen: isOpenToast,
    onOpen: onOpenToast,
    onClose: onCloseToast,
  } = useDisclosure();
  useEffect(() => {
    setTimeout(() => {
      onCloseToast();
    }, 3000);
  });

  return (
    <div>
      <ProjectList data={projectListData} />

      {/* popup */}
      <div css={[tw`mt-[30px]`]} />
      <Button as="button" type="button" onClick={onOpenPopUp}>
        <span>[팝업버튼]알림 방식을 선택하세요.</span>
      </Button>
      <PopUp
        isOpen={isOpenPopUp}
        onClose={onClosePopUp}
        title="모집 알림 해지"
        content="실시간으로 모집 상태를 안내해주는
모집 알림을 해지하시겠어요?"
        buttons={[
          <Button
            theme="secondary"
            as="button"
            type="button"
            onClick={onClosePopUp}
          >
            취소
          </Button>,
          <Button as="button" type="button" onClick={onClosePopUp}>
            확인
          </Button>,
        ]}
      />

      <div css={[tw`mt-[30px]`]} />
      <Button as="button" type="button" onClick={onOpenToast}>
        <span>[토스트버튼]duration:3000</span>
      </Button>
      <Toast show={isOpenToast} title="본캐 홍길동 어쩌고 저쩌고 했습니다." />

      <div css={[tw`mt-[30px]`]} />
      <Input isError />
      <ErrorMessage>이메일을 입력해주세요.</ErrorMessage>

      <div css={[tw`mt-[30px]`]} />
      <ToastMessage />
      <div css={[tw`mt-[30px]`]} />
      <Input />
      <ErrorMessage>이메일을 입력해주세요.</ErrorMessage>
      <div css={[tw`mt-[30px]`]} />
      <LimitedTextarea minInput={10} maxInput={1000} />
      <ButtonArea>
        <Button theme="secondary" as="a" href="www.google.com">
          버튼
        </Button>
        <Button as="button" width="narrow">
          버튼
        </Button>
        <Button as="button">버튼</Button>
        <Button as="button">버튼</Button>
        <Button as="button">버튼</Button>
      </ButtonArea>
    </div>
  );
}

export default App;

App.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout>{page}</CommonLayout>;
};
