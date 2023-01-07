import Heading from "../Typography/Heading";
import Text from "../Typography/Text";

import styles from "./PointsToNote.module.scss";

interface PointsToNoteProps {
  title?: string;
  data: {
    id: number;
    content: string;
  }[];
}

function PointsToNote({ title, data }: PointsToNoteProps) {
  return (
    <div className={styles.pointsToNote}>
      <div className={styles.header}>
        {title && (
          <Heading as="h2" size="sm" fw="medium">
            {title}
          </Heading>
        )}
      </div>
      <ul className={styles.ul}>
        {data.map(({ id, content }) => (
          <li key={id}>
            <Text
              as="span"
              size="md"
              fw="demiLight"
              color="darkgray"
              className={styles.text}
            >
              {content}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PointsToNote;
