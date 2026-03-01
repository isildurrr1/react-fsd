import { useTasks } from "features/taskList/model/useTasks";
import { Spinner } from "shared/ui/Spinner";
import styles from "./TaskWidget.module.css";
import { TaskList } from "features/taskList";

export const TaskWidget = () => {
  const { tasks, filter, setFilter, removeTask, isLoading } = useTasks();

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <Spinner />
      </div>
    );
  }

  return (
    <TaskList
      tasks={tasks}
      filter={filter}
      setFilter={setFilter}
      onDelete={removeTask}
    />
  );
};
