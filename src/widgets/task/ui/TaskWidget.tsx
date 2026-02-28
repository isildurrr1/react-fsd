import { useTasks } from "features/taskList/model/useTasks";
import { MOCK_TASKS } from "../model/constants";
import { TaskList } from "features/taskList/ui/TaskList";

export const TaskWidget = () => {
  const { tasks, filter, setFilter, removeTask } = useTasks(MOCK_TASKS);

  return (
    <TaskList
      tasks={tasks}
      filter={filter}
      setFilter={setFilter}
      onDelete={removeTask}
    />
  );
};
