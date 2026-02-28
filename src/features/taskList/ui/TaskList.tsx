import styles from "./TaskList.module.css";
import { TaskCard } from "entities/task/ui/TaskCard";
import { FilterButton } from "shared/ui/FilterButton";
import { FILTERS } from "../model/constants";
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
      {tasks.map((task) => (
        <TaskCard key={task.id} taskData={task} onDelete={onDelete} />
      ))}
    </div>
  );
};
