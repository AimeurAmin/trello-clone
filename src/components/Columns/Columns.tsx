import { string } from "prop-types";
import { FC, PropsWithChildren } from "react";
import styles from "./Columns.module.scss";
import AddNewItem from "../../containers/AddNewItem/AddNewItem";

interface ColumnProps {
  text: string;
  children: React.ReactNode;
}

const Columns: FC<ColumnProps> = ({ text, children }: ColumnProps) => {
  return (
    <div className={`${styles["container"]}`}>
      <div className={styles.columnTitle}>{text}</div>
      {children}
      <AddNewItem
        dark={true}
        toggleButtonText="+ Add another task"
        onAdd={console.log}
      />
    </div>
  );
};

export default Columns;
