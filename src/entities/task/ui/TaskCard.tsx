import styles from "./TaskCard.module.css";
import { memo, type FC } from "react";
import type { TaskCardProps } from "../model/types";

export const TaskCard: FC<TaskCardProps> = memo(({ taskData }) => {
  const { title, completed } = taskData;
  const statusLabel = completed ? "Готово" : "В процессе";

  const cardClassName = `${styles.card} ${completed ? styles.cardCompleted : styles.cardPending}`;
  const titleClassName = `${styles.title} ${completed ? styles.titleCompleted : ""}`;
  const badgeClassName = `${styles.badge} ${completed ? styles.badgeCompleted : styles.badgePending}`;

  return (
    <div className={cardClassName}>
      <div className={styles.content}>
        <p className={titleClassName}>{title}</p>
        <div className={styles.rightSide}>
          <span className={badgeClassName}>{statusLabel}</span>
        </div>
      </div>
    </div>
  );
});
