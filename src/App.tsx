import styles from "./App.module.scss";
import Columns from "./components/Columns/Columns";
import AddNewItem from "./containers/AddNewItem/AddNewItem";
import { PropsWithChildren } from "react";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";

const App: React.FC<PropsWithChildren> = ({ children }) => {
  const { lists, dispatch } = useAppState();

  return (
    <div className={styles["container"]}>
      {lists.map((list) => (
        <Columns key={list.id} text={list.text} id={list.id} />
      ))}

      <AddNewItem
        dark={false}
        toggleButtonText="+ Add another list"
        onAdd={(text) => {
          dispatch(addList(text));
        }}
      />
    </div>
  );
};

export default App;
