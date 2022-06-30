import NewItemInput from "../NewItemInput/NewItemInput";
import styles from "./NewItemForm.module.scss";
import { useState } from "react";
import NewItemButton from "../NewItemButton/NewItemButton";
import { useFocus } from "../../utils/useFocus";

interface NewItemFormProps {
  onAdd(text: string): void;
}

const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();
  return (
    <div className={styles["container"]}>
      <NewItemInput
        reference={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </div>
  );
};

export default NewItemForm;
