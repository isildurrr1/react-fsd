import type { FC } from "react";
import type { SpinnerProps } from "../model/types";
import styles from "./Spinner.module.css";

export const Spinner: FC<SpinnerProps> = ({ size = 40 }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} style={{ width: size, height: size }} />
    </div>
  );
};
