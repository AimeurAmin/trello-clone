import { FC } from "react";
import styles from "./Columns.module.scss";
import AddNewItem from "../../containers/AddNewItem/AddNewItem";
import { useAppState } from "../../state/AppStateContext";
import Card from "../Card/Card";

interface ColumnProps {
  id: string;
  text: string;
}

const Columns: FC<ColumnProps> = ({ text, id }: ColumnProps) => {
  const { getTasksByListId } = useAppState();

  const tasks = getTasksByListId(id);
  return (
    <div className={`${styles["container"]}`}>
      <div className={styles.columnTitle}>{text}</div>
      {tasks.map((task) => (
        <Card key={task.id} id={task.id} text={task.text} />
      ))}
      <AddNewItem
        dark={true}
        toggleButtonText="+ Add another task"
        onAdd={console.log}
      />
    </div>
  );
};

export default Columns;
