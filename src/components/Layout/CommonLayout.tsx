import { css } from "@emotion/react";
import React, { ReactElement } from "react";
import tw from "twin.macro";

interface CommonLayoutProps {
  children: React.ReactNode;
}

export default function CommonLayout({
  children,
}: CommonLayoutProps): ReactElement {
  return (
    <div css={[tw`w-screen h-screen bg-black flex justify-center`]}>
      <div
        css={[
          tw`flex flex-col`,
          css`
            max-width: 430px;
            background-color: rgb(246, 247, 251);
          `,
        ]}
      >
        <nav
          css={[
            tw`bg-blue-500 flex justify-between items-center px-10`,
            css`
              height: 80px;
            `,
          ]}
        >
          <div>Side.IT</div>
          <div>아이콘</div>
        </nav>
        {children}
      </div>
    </div>
  );
}
