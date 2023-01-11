import Image from "next/image";

import None from "../../../../src/components/None/None";

function Index() {
  return (
    <div>
      <None
        image={
          <Image
            src="/asset/image/ico/ico_project.svg"
            alt="none"
            layout="fixed"
            width={80}
            height={80}
          />
        }
        text="알림이 없습니다."
      />
    </div>
  );
}

export default Index;
