import styles from "./TaskList.module.css";
import { TaskCard } from "entities/task/ui/TaskCard";
import { FilterButton } from "shared/ui/FilterButton";
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
        <FilterButton filter={filter} setFilter={setFilter} />
        <h2 className={styles.title}>Список задач</h2>
      </div>
      {tasks.map((task) => (
        <TaskCard key={task.id} taskData={task} onDelete={onDelete} />
      ))}
    </div>
  );
};
