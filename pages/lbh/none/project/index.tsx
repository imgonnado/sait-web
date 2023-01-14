import Image from "next/image";

import None from "../../../../src/components/None/None";

function Index() {
  return (
    <div>
      <None
        image={
          <Image
            src="/asset/image/ico/ico_project_no.svg"
            alt="none"
            layout="fixed"
            width={80}
            height={80}
          />
        }
        text="운영중인 사잇이 없네요!<br />
나와 맞는 사잇을 직접 만들어보세요!"
      />
    </div>
  );
}

export default Index;
