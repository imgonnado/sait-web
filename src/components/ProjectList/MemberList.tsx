import Image from "next/image";
import Link from "next/link";
import styles from "./MemberList.module.scss";
import clsx from "clsx";

interface Member {
  id: number;
  // 이미지
  image: string;
  // 페이지 이동 링크
  url: string;
  // 이름
  name: string;
  // 내용
  content?: string;
  // 경력
  career?: string;
  // 직업
  profession: string;
  // 아이콘종류
  ico: string;
}

interface MemberListProps {
  data: Member[];
  type?: "row";
}

function MemberList({ data, type }: MemberListProps) {
  return (
    <div className={clsx(styles.memberList, type === "row" && styles.row)}>
      <ul>
        {data.map(
          ({
            id: dataId,
            image: dataImageSrc,
            url: dataLinkUrl,
            name,
            content,
            career,
            profession,
            ico,
          }) => (
            <li key={dataId}>
              <a href={dataLinkUrl}>
                <div className={styles.listImg}>
                  {dataImageSrc !== "" && (
                    <Image
                      src={dataImageSrc}
                      alt=""
                      layout="responsive"
                      height="100%"
                      width="100%"
                      className={styles.profile}
                    />
                  )}
                  <span className={styles.ico}>
                    <img src={ico} alt="" />
                  </span>
                </div>
                <div className={styles.list_txt}>
                  <p>
                    <b className={styles.name}>{name}</b>
                    <span className={styles.carrer}>
                      {profession}
                      {career && career}
                    </span>
                  </p>
                  {content && <p className={styles.content}>{content}</p>}
                </div>
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default MemberList;
