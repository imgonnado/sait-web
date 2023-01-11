import { Fragment, ReactNode } from "react";

import Text from "../Typography/Text";

import styles from "./None.module.scss";

interface NoneProps {
  image?: ReactNode;
  text?: string;
  subText?: string;
}

function None({ image, text, subText }: NoneProps) {
  return (
    <figure className={styles.noneWrapper}>
      {image}
      <figcaption className={styles.noneText}>
        {text && (
          <Text fw="medium" color="lightgray" style={{ color: "#999999" }}>
            {/* text에 만약 <br />이 들어오면 그 위치에서 줄바꿈해준다. */}
            {text.split("<br />").map(line => (
              <Fragment key={line}>
                {line}
                <br />
              </Fragment>
            ))}
          </Text>
        )}
        {subText && (
          <Text size="sm" color="gray">
            {subText}
          </Text>
        )}
      </figcaption>
    </figure>
  );
}

export default None;
