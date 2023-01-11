import tw from "twin.macro";
import Heading from "../Typography/Heading";

// 임시 구현(추후 수정)
function Top() {
  return (
    <div css={[tw`h-[56px] flex justify-center items-center`]}>
      <Heading
        as="h1"
        fw="medium"
        style={{ color: "#191919", display: "inline" }}
      >
        환경 설정
      </Heading>
    </div>
  );
}

export default Top;
