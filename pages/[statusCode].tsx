import { ReactElement } from "react";
import Image from "next/image";
import { GetServerSidePropsContext } from "next";

import CommonLayout from "../src/components/Layout/CommonLayout";
import Heading from "../src/components/Typography/Heading";
import Text from "../src/components/Typography/Text";
import Button from "../src/components/Button/Button";

import styles from "./StatusCode.module.scss";

interface Message {
  title: string;
  content: string;
}

interface ErrorPageProps {
  message: Message;
  image: string;
}

function ErrorPage({ message, image }: ErrorPageProps) {
  return (
    <section className={styles.error}>
      <div className={styles.imageWrapper}>
        <Image src={image} width="200px" height="200px" />
      </div>
      <div className={styles.textWrapper}>
        <Heading size="md" fw="medium">
          {message.title}
        </Heading>
        <Text fw="demiLight" className={styles.content}>
          {message.content}
        </Text>
      </div>
      <div className={styles.buttonWrapper}>
        <Button as="a" href="/" color="primary">
          홈으로 가기
        </Button>
      </div>
    </section>
  );
}

export default ErrorPage;

ErrorPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <CommonLayout header={false} gnb={false} mainClassName={styles.main}>
      {page}
    </CommonLayout>
  );
};

const ERR_MAP = {
  400: {
    message: {
      title: `똑똑! 요청을 다시 찾아주세요.`,
      content: `요청을 다시 확인해 주세요.
계속될 경우, 관리자에게 문의해 보세요.`,
    },
    image: "/asset/image/ico/ico_400.svg",
  },
  // 401 미정
  403: {
    message: {
      title: `잠시만요!`,
      content: `요청하신 페이지로의 접근이 어려워요.
주소가 정확한지 다시 한번 확인해주세요.`,
    },
    image: "/asset/image/ico/ico_403.svg",
  },
  404: {
    message: {
      title: `요청하신 페이지를 찾을 수 없습니다.`,
      content: `요청하신 페이지는 제거되었거나 변경되어 사용할 수 없습니다.
입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요.`,
    },
    image: "/asset/image/ico/ico_404.svg",
  },
  inspection: {
    message: {
      title: "사잇의 시스템 점검 중입니다.",
      content: `안정적인 서비스 제공을 위한 시스템 점검 작업 중이므로 잠시 후 다시 접속해 주세요.`,
    },
    image: "/asset/image/ico/ico_inspection.svg",
  },
  offline: {
    message: {
      title: "인터넷 상태를 확인해주세요.",
      content: `네트워크 상태가 불안정해요.
잠시후 다시 접속해 볼까요?`,
    },
    image: "/asset/image/ico/ico_offline.svg",
  },
};

export function getServerSideProps({ res, params }: GetServerSidePropsContext) {
  const { statusCode } = params as { statusCode: string };

  // ERR_MAP의 key값 중에 statusCode가 없을 경우 404로 설정
  if (!Object.keys(ERR_MAP).includes(statusCode)) {
    res.statusCode = 404;
    return {
      props: {
        ...ERR_MAP[404],
      },
    };
  }

  // inspection 이나 offline일 경우 statusCode를 200으로 설정
  if (statusCode === "inspection" || statusCode === "offline") {
    res.statusCode = 200;
    return {
      props: {
        ...ERR_MAP[statusCode as keyof typeof ERR_MAP],
      },
    };
  }

  res.statusCode = +statusCode;
  return {
    props: {
      ...ERR_MAP[+statusCode as keyof typeof ERR_MAP],
    },
  };
}
