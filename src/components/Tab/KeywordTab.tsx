import { useState, useLayoutEffect, useRef } from "react";
import clsx from "clsx";
import styles from "./KeywordTab.module.scss";

interface Project {
  id: number;
  keywords: string;
}

interface KeywordTabProps {
  data: Project[];
}

function KeywordTab({ data }: KeywordTabProps) {
  const [isToggle, setIsToggle] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const tabul = useRef<HTMLUListElement>(null);

  const onToggle = () => {
    if (isToggle !== true) {
      setIsToggle(true);
    } else {
      setIsToggle(false);
    }
  };

  useLayoutEffect(() => {
    let heightCheck = tabul.current?.offsetHeight;
    if (heightCheck !== undefined && heightCheck > 89) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [tabul]);

  return (
    <div className={clsx(styles.tabArea, isToggle == true && styles.on)}>
      <ul ref={tabul} className={styles.tab}>
        {data.map(({ id: dataId, keywords }) => (
          <li key={dataId}>
            <span className={styles.keyword}>
              <input type="checkbox" value={keywords} id={keywords + dataId} />
              <label htmlFor={keywords + dataId}>{keywords}</label>
            </span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={clsx(styles.more, isActive == true && styles.active)}
        onClick={onToggle}
      >
        더보기
      </button>
    </div>
  );
}

export default KeywordTab;
