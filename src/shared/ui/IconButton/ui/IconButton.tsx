import styles from "./IconButton.module.css";
import type { FC } from "react";
import type { IconButtonProps } from "../model/types";

export const IconButton: FC<IconButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
