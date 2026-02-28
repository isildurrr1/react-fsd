import { useCallback, useMemo, useState } from "react";
import type { Filter, Task } from "entities/task/model/types";
import type { UseTasksResult } from "./types";

export const useTasks = (initial: Task[]): UseTasksResult => {
  const [allTasks, setAllTasks] = useState<Task[]>(initial);
  const [filter, setFilter] = useState<Filter>("all");

  const tasks = useMemo(() => {
    switch (filter) {
      case "completed":
        return allTasks.filter((t) => t.completed);
      case "incomplete":
        return allTasks.filter((t) => !t.completed);
      default:
        return allTasks;
    }
  }, [allTasks, filter]);

  const removeTask = useCallback((id: string) => {
    setAllTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { tasks, filter, setFilter, removeTask };
};
