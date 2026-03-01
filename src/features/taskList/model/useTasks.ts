import { useCallback, useEffect, useMemo, useState } from "react";
import type { Filter, UseTasksResult } from "./types";
import { useGetTasksQuery } from "../api/tasksApi";
import type { Task } from "entities/task";

export const useTasks = (): UseTasksResult => {
  const { data: initialTasks = [], isLoading } = useGetTasksQuery();
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    if (initialTasks.length && allTasks.length === 0) {
      setAllTasks(initialTasks);
    }
  }, [initialTasks, allTasks.length]);

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

  // чтобы не проскакивала надпись "Нет задач"
  const isTasksLoading =
    isLoading || (initialTasks.length > 0 && allTasks.length === 0);

  return { tasks, filter, setFilter, removeTask, isLoading: isTasksLoading };
};
