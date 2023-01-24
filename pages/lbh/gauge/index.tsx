import tw from "twin.macro";

import Gauge from "../../../src/components/Gauge/Gauge";

function index() {
  const temp = [
    {
      fraction: 1 / 7,
      gaugeLabel: "1/7",
    },
    {
      fraction: 2 / 7,
      gaugeLabel: "2/7",
    },
    {
      fraction: 3 / 7,
      gaugeLabel: "3/7",
    },
    {
      fraction: 4 / 7,
      gaugeLabel: "4/7",
    },
    {
      fraction: 5 / 7,
      gaugeLabel: "5/7",
    },
    {
      fraction: 6 / 7,
      gaugeLabel: "6/7",
    },
    {
      fraction: 7 / 7,
      gaugeLabel: "7/7",
    },
    {
      fraction: 1 / 5,
      gaugeLabel: "1/5",
    },
    {
      fraction: 2 / 5,
      gaugeLabel: "2/5",
    },
    {
      fraction: 3 / 5,
      gaugeLabel: "3/5",
    },
    {
      fraction: 4 / 5,
      gaugeLabel: "4/5",
    },
    {
      fraction: 5 / 5,
      gaugeLabel: "5/5",
    },
  ];

  return (
    <>
      <div css={[tw`mt-[20px] mx-auto px-[16px]`]}>
        {temp.map((item, index) => (
          <div key={index}>
            <Gauge fraction={item.fraction} gaugeLabel={item.gaugeLabel} />
            <div css={[tw`mt-[20px] mx-auto px-[16px]`]} />
          </div>
        ))}
      </div>
    </>
  );
}

export default index;
