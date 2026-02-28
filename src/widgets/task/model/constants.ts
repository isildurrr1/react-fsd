import type { Task } from "entities/task/model/types";

export const MOCK_TASKS: Task[] = [
  { id: "1", title: "Купить продукты", completed: false },
  { id: "2", title: "Прочитать книгу", completed: true },
  { id: "3", title: "Выгулять собаку", completed: false },
  { id: "4", title: "Убраться дома", completed: false },
  { id: "5", title: "Сделать тренировку", completed: true },
  { id: "6", title: "Написать список дел на завтра", completed: false },
];
