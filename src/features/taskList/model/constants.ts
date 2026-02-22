import type { Filter } from "entities/task/model/types";

export const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "completed", label: "Готовые" },
  { value: "incomplete", label: "В процессе" },
];
