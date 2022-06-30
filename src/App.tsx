import styles from "./App.module.scss";
import Card from "./components/Card/Card";
import Columns from "./components/Columns/Columns";
import AddNewItem from "./containers/AddNewItem/AddNewItem";
import { PropsWithChildren } from "react";
import { useAppState } from "./state/AppStateContext";

const App: React.FC<PropsWithChildren> = ({ children }) => {
  const { lists } = useAppState();
  return (
    <div className={styles["container"]}>
      {lists.map((list) => (
        <Columns key={list.id} text={list.text} id={list.id} />
      ))}

      <AddNewItem
        dark={false}
        toggleButtonText="+ Add another list"
        onAdd={console.log}
      />
    </div>
  );
};

export default App;
