import clsx from "clsx";

import { convertToPercent } from "../../util/helpers";

import styles from "./Gauge.module.scss";

interface GaugeProps {
  fraction: number;
  gaugeLabel?: string;
  labelAlign?: "left" | "right" | "center";
}

function Gauge({ fraction, gaugeLabel, labelAlign = "right" }: GaugeProps) {
  return (
    <div className={styles.gauge}>
      {gaugeLabel && (
        <div
          className={clsx(
            styles.gaugeLabel,
            styles[`gaugeLabel--${labelAlign}`]
          )}
        >
          {gaugeLabel}
        </div>
      )}

      <div className={styles.gaugeBar}>
        <div
          className={styles.gaugeProgress}
          style={{
            width: `${convertToPercent({ num: fraction })}%`,
          }}
        />
      </div>
    </div>
  );
}

export default Gauge;
