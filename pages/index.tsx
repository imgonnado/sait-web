import { css } from "@emotion/react";
import { ReactElement } from "react";
import tw from "twin.macro";

import CommonLayout from "../src/components/Layout/CommonLayout";
import { useProjectList } from "../src/hooks/api/useProject";

function App() {
  const { projectList, projectDataIsError, projectDataIsloading } =
    useProjectList();

  console.log(projectList);

  if (projectDataIsError) {
    return <div>error</div>;
  }
  return (
    <div
      css={[
        tw``,
        css`
          padding: 14px 16px;
        `,
      ]}
    >
      <h2
        css={[
          css`
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 14px;
          `,
        ]}
      >
        모집중인 인기 프로젝트
      </h2>
      <ul>
        {!projectDataIsloading &&
          projectList?.length > 0 &&
          projectList.map(project => {
            return (
              <li
                key={project.id}
                css={[
                  tw`flex w-full`,
                  css`
                    height: 320px;
                  `,
                ]}
              >
                <div
                  css={[
                    css`
                      width: 100%;
                      display: flex;
                      position: relative;

                      & > * {
                        height: 300px;
                        margin: 0;
                        display: inline;
                        white-space: nowrap;
                        &:nth-child(1) {
                          background-color: salmon;
                          min-width: 160px;
                        }
                        &:nth-child(2) {
                          background-color: khaki;
                          flex-basis: 100%;
                          flex: 1 1 auto;
                          flex-wrap: nowrap;
                          overflow: hidden;
                          text-overflow: ellipsis;
                        }
                      }
                    `,
                  ]}
                >
                  <pre>이미지영역</pre>
                  <section
                    css={[
                      css`
                        padding: 4px;
                      `,
                    ]}
                  >
                    <button
                      css={[
                        css`
                          background-color: green;
                          border-radius: 14px;
                          padding: 4px 8px;
                        `,
                      ]}
                    >
                      스킬 쌓기
                    </button>
                    <div
                      css={[
                        css`
                          & > * {
                            margin-bottom: 4px;
                          }
                          & > *:last-child {
                            margin-bottom: 0;
                          }
                        `,
                      ]}
                    >
                      <h3
                        css={[
                          css`
                            font-size: 18px;
                            font-weight: 700;
                            overflow: hidden;
                            text-overflow: ellipsis;
                          `,
                        ]}
                      >
                        {project.projectTitle}
                      </h3>
                      <p
                        css={[
                          css`
                            overflow: hidden;
                            text-overflow: ellipsis;
                            font-size: 14px;
                            font-weight: 400;
                            color: rgb(128, 128, 128);
                          `,
                        ]}
                      >
                        {project.description}
                      </p>
                    </div>
                  </section>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;

App.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout>{page}</CommonLayout>;
};
