import Image from "next/image";
import Link from "next/link";
import IconButton from "../Button/IconButton";

import styles from "./ProjectList.module.scss";

interface Keyword {
  en: string;
  ko: string;
}

interface Member {
  id: number;
  image: string;
  name: string;
}

interface Project {
  id: number;
  // 이미지
  image: string;
  // 제목
  title: string;
  // 태그
  tag: string;
  // 키워드들, /search/[:keyword]
  keywords: Keyword[];
  // 멤버리스트(id, image, name), 4개 이상은 + 버튼
  members: Member[];
  // status:Enum type (모집중, 모집완료, 진행중, 완료)
  // 멤버 리스트 옆 status에 대한 아이콘
  status: number;
  // 좋아요
  like: number;
  maxMember: number;
}

enum Status {
  "모집중" = 0,
  "진행중" = 1,
  "완료" = 2,
}

interface ProjectListProps {
  data: Project[];
}

function ProjectList({ data }: ProjectListProps) {
  return (
    <div className={styles.project_list}>
      <ul>
        {data.map(
          ({
            id: dataId,
            image: dataImageSrc,
            title,
            tag,
            keywords,
            members,
            status,
            like,
            maxMember,
          }) => (
            <li key={dataId}>
              <div className={styles.list_img}>
                <Image
                  src={dataImageSrc}
                  alt=""
                  layout="responsive"
                  height="100%"
                  width="100%"
                />
              </div>
              <div className={styles.list_txt}>
                <div className={styles.tagarea}>
                  <span className={styles.tag}>{tag}</span>
                  {/* <!-- <span className="tag red">태그</span>
                                <span className="tag blue">태그</span>
                                <span className="tag pink">태그</span>
                                <span className="tag yellow">태그</span>
                                <span className="tag emerald">태그</span> --> */}
                </div>
                <p>{title}</p>
                <ul className={styles.keyword_list}>
                  {keywords.map(({ en, ko }) => (
                    <li key={en}>
                      <Link href={`/search/${en}`}>
                        <a>#{ko}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className={styles.member_list}>
                  <ul>
                    {members.map(({ id, image }) => (
                      <li key={id}>
                        <Image
                          src={image}
                          alt=""
                          layout="fixed"
                          height="32px"
                          width="32px"
                        />
                      </li>
                    ))}
                  </ul>
                  <IconButton className={styles.btnIconPlus}>
                    추가하기
                  </IconButton>
                </div>
                <div className={styles.status_list}>
                  <span className={styles.like}>{like}</span>
                  <span className={styles.member}>
                    {members.length}
                    <span>/{maxMember}</span>
                  </span>
                  <span className={styles.status}>{Status[`${status}`]}</span>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default ProjectList;
