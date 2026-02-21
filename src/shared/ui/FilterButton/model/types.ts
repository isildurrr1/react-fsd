import type { Filter } from "entities/task/model/types";

export interface FilterButtonProps {
  filter: Filter;
  setFilter: (f: Filter) => void;
}
