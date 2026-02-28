import styles from "./TaskList.module.css";
import { FilterButton } from "shared/ui/FilterButton";
import { DeleteButton } from "shared/ui/DeleteButton";
import { FILTERS } from "../model/constants";
import { TaskCard } from "entities/task";
import type { FC } from "react";
import type { TaskListProps } from "../model/types";

export const TaskList: FC<TaskListProps> = ({
  tasks,
  filter,
  setFilter,
  onDelete,
}) => {
  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <div className={styles.filters}>
          {FILTERS.map((item) => (
            <FilterButton
              key={item.value}
              label={item.label}
              isActive={filter === item.value}
              onClick={() => setFilter(item.value)}
            />
          ))}
        </div>
        <h2 className={styles.title}>Список задач</h2>
      </div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id} className={styles.itemRow}>
            <TaskCard taskData={task} />
            <DeleteButton onClick={() => onDelete(task.id)} />
          </div>
        ))
      ) : (
        <span className={styles.empty}>Задачи отсутствуют</span>
      )}
    </div>
  );
};
