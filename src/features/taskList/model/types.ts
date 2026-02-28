import type { Filter, Task } from "entities/task/model/types";

export type UseTasksResult = {
  tasks: Task[];
  filter: Filter;
  setFilter: (f: Filter) => void;
  removeTask: (id: string) => void;
};

export interface TaskListProps {
  tasks: Task[];
  filter: Filter;
  setFilter: (f: Filter) => void;
  onDelete: (id: string) => void;
}
