export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskCardProps {
  taskData: Task;
  onDelete: (id: string) => void;
}

export type Filter = "all" | "completed" | "incomplete";
