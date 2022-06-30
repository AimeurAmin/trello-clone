import NewItemInput from "../NewItemInput/NewItemInput";
import styles from "./NewItemForm.module.scss";
import { useState } from "react";
import NewItemButton from "../NewItemButton/NewItemButton";

interface NewItemFormProps {
  onAdd(text: string): void;
}

const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");

  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  };
  return (
    <div className={styles["container"]}>
      <NewItemInput value={text} onChange={(e) => setText(e.target.value)} onKeyPress={handleAddText}/>
      <NewItemButton onClick={() => onAdd(text)} >
        Create
      </NewItemButton>
    </div>
  );
};

export default NewItemForm;
