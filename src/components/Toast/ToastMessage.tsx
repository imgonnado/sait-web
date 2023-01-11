import { css } from "@emotion/react";

function ToastMessage() {
  return (
    <div
      css={[
        css`
          position: fixed;
          bottom: 24px;
          padding: 3px;
          overflow-y: auto;
          overflow-x: hidden;
          display: inline-flex;
          flex-wrap: nowrap;
          flex-direction: column-reverse;
          z-index: 50;
        `,
      ]}
    >
      <div
        css={[
          css`
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-top: 6px;
            height: 48px;
            width: calc(100vw - 40px);
            border-radius: 12px;
            overflow: hidden;
            opacity: 0.8;
            background: #292929;
            color: #fff;
          `,
        ]}
      >
        <p
          css={[
            css`
              text-align: center;
            `,
          ]}
        >
          본캐 홍길동(으)로 전환되었습니다.
        </p>
      </div>
    </div>
  );
}

export default ToastMessage;
