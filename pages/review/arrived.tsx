import { ReactElement } from "react";
import Image from "next/image";
import tw from "twin.macro";

import CommonLayout from "../../src/components/Layout/CommonLayout";
import Modal from "../../src/components/Modal/Modal";
import useDisclosure from "../../src/hooks/useDisclosure";
import Backdrop from "../../src/components/Backdrop/Backdrop";
import Heading from "../../src/components/Typography/Heading";
import Text from "../../src/components/Typography/Text";
import Button from "../../src/components/Button/Button";

import styles from "./Review.module.scss";

type ReviewType = "good" | "not" | "average";

type ReviewTypeObj = Record<ReviewType, string>;

const REVIEW_TYPE: ReviewTypeObj = {
  good: "최고예요",
  not: "별로예요",
  average: "보통이에요",
};

interface Review {
  type: ReviewType;
  content: string;
}

const review: Review = {
  type: "good",
  content:
    "팀원들이 잘 따라주고 적극적이여서 부담감 없이 재미있게 프로젝트를 참여했어요!",
};

function Arrived() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* 임시 버튼 */}
      <button onClick={onOpen} css={[tw`bg-ribbon rounded-[16px] p-[16px]`]}>
        Open Modal
      </button>

      <Backdrop isOpen={isOpen} onClose={onClose}>
        <Modal isOpen={isOpen} onClose={onClose}>
          <Heading size="md" fw="medium">
            홍길동님이 보낸 피드백이 도착했어요.
          </Heading>
          <div className={styles.imageWrapper}>
            <Image
              src={`/asset/image/ico/ico_${review.type}.svg`}
              alt={`${review.type} review`}
              width={72}
              height={72}
            />
            <Text size="md" fw="demiLight">
              {REVIEW_TYPE[review.type]}
            </Text>
          </div>
          <section className={styles.content}>{review.content}</section>
          <Modal.ButtonArea>
            <Button onClick={onClose}>확인</Button>
          </Modal.ButtonArea>
        </Modal>
      </Backdrop>
    </>
  );
}

export default Arrived;

Arrived.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout header={false}>{page}</CommonLayout>;
};
