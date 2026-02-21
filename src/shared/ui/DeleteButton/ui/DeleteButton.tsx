import trashIcon from "shared/assets/icons/trash.svg";
import styles from "./DeleteButton.module.css";
import { IconButton } from "shared/ui/IconButton";
import type { FC } from "react";
import type { DeleteButtonProps } from "../model/types";

export const DeleteButton: FC<DeleteButtonProps> = (props) => {
  return (
    <IconButton
      aria-label="Удалить"
      {...props}
      className={`${styles.deleteButton} ${props.className ?? ""}`}
    >
      <img src={trashIcon} alt="" className={styles.icon} />
    </IconButton>
  );
};
