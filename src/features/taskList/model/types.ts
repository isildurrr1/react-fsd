import type { Task } from "entities/task";

export type Filter = "all" | "completed" | "incomplete";

export type UseTasksResult = {
  tasks: Task[];
  filter: Filter;
  setFilter: (f: Filter) => void;
  removeTask: (id: string) => void;
  isLoading: boolean;
};

export interface TaskListProps {
  tasks: Task[];
  filter: Filter;
  setFilter: (f: Filter) => void;
  onDelete: (id: string) => void;
}
