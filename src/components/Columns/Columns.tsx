import { FC } from "react";
import styles from "./Columns.module.scss";
import AddNewItem from "../../containers/AddNewItem/AddNewItem";
import { useAppState } from "../../state/AppStateContext";
import Card from "../Card/Card";
import { addTask, removeList } from "../../state/actions";

interface ColumnProps {
  id: string;
  text: string;
}

const Columns: FC<ColumnProps> = ({ text, id: listId }: ColumnProps) => {
  const { getTasksByListId } = useAppState();

  const tasks = getTasksByListId(listId);

  const { dispatch } = useAppState();
  return (
    <div className={`${styles["container"]}`}>
      <div
        className={styles["removeList"]}
        onClick={() => dispatch(removeList(listId))}
      >
        x
      </div>

      <div className={styles.columnTitle}>{text}</div>
      {tasks.map((task) => (
        <Card key={task.id} id={task.id} listId={listId} text={task.text} />
      ))}
      <AddNewItem
        dark={true}
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch(addTask(text, listId))}
      />
    </div>
  );
};

export default Columns;
