import styles from "./FilterButton.module.css";
import type { FC } from "react";
import type { FilterButtonProps } from "../model/types";

export const FilterButton: FC<FilterButtonProps> = ({
  label,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.buttonActive : ""}`}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
