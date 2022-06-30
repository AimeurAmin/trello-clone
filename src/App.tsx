import { FC, PropsWithChildren } from "react";
import styles from "./App.module.scss";
import AddItemButton from "./components/AddItemButton/AddItemButton";
import Card from "./components/Card/Card";
import Columns from "./components/Columns/Columns";
import AddNewItem from "./containers/AddNewItem/AddNewItem";

const App: React.FC<any> = ({ color, children }) => {
  return (
    <div className={styles["container"]}>
      <Columns text="Backlog">
        <Card text="Init trello project" />
        <Card text="Set global styles" />
      </Columns>

      <Columns text="In progress">
        <Card text="Learn React TS" />
      </Columns>

      <Columns text="Done">
        <Card text="Learn Typescript" />
        <Card text="Learn React (JS)" />
      </Columns>

      <AddNewItem
        dark={false}
        toggleButtonText="+ Add another list"
        onAdd={console.log}
      />
    </div>
  );
};

export default App;
