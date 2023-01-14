import Image from "next/image";

import None from "../../../../src/components/None/None";

function Index() {
  return (
    <div>
      <None
        image={
          <Image
            src="/asset/image/ico/ico_search_no.svg"
            alt="none"
            layout="fixed"
            width={80}
            height={80}
          />
        }
        text="검색된 결과가 없습니다."
        subText="단어 철자가 정확한지 확인해 주세요."
      />
    </div>
  );
}

export default Index;
