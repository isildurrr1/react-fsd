import styles from "./FilterButton.module.css";
import { FILTERS } from "../model/constants.ts";
import type { FC } from "react";
import type { FilterButtonProps } from "../model/types";
import type { Filter } from "entities/task/model/types.ts";

export const FilterButton: FC<FilterButtonProps> = ({ filter, setFilter }) => {
  const handleClick = (value: Filter) => () => setFilter(value);

  return (
    <div className={styles.wrapper}>
      {FILTERS.map((item) => (
        <button
          className={`${styles.button} ${filter === item.value ? styles.buttonActive : ""}`}
          key={item.value}
          type="button"
          onClick={handleClick(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
