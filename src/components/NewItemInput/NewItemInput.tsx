import styles from "./NewItemInput.module.scss";
import { useFocus } from "../../utils/useFocus";

interface NewItemInputProps {
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const NewItemInput = ({ value, onChange }: NewItemInputProps) => {
  const refFocus = useFocus();
  return (
    <input
      ref={refFocus}
      className={styles["container"]}
      value={value}
      onChange={onChange}
      placeholder="What do you wanna do next?"
    />
  );
};

export default NewItemInput;
