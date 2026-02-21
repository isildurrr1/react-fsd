import type { Task } from "entities/task/model/types";

export type Filter = "all" | "completed" | "incomplete";

export type UseTasksResult = {
  tasks: Task[];
  filter: Filter;
  setFilter: (f: Filter) => void;
  removeTask: (id: string) => void;
};
