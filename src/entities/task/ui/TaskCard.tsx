import styles from "./TaskCard.module.css";
import { DeleteButton } from "shared/ui/DeleteButton";
import type { FC } from "react";
import type { TaskCardProps } from "../model/types";

export const TaskCard: FC<TaskCardProps> = ({ taskData, onDelete }) => {
  const { title, id, completed } = taskData;
  const statusLabel = completed ? "Готово" : "В процессе";

  const cardClassName = `${styles.card} ${completed ? styles.cardCompleted : styles.cardPending}`;
  const titleClassName = `${styles.title} ${completed ? styles.titleCompleted : ""}`;
  const badgeClassName = `${styles.badge} ${completed ? styles.badgeCompleted : styles.badgePending}`;

  const handleDeleteClick = () => onDelete(id);

  return (
    <div className={styles.row}>
      <div className={`${cardClassName} ${styles.mainCard}`}>
        <div className={styles.content}>
          <p className={titleClassName}>{title}</p>
          <div className={styles.rightSide}>
            <span className={badgeClassName}>{statusLabel}</span>
          </div>
        </div>
      </div>

      <DeleteButton onClick={handleDeleteClick} />
    </div>
  );
};
