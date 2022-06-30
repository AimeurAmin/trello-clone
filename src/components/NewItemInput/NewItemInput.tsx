import styles from "./NewItemInput.module.scss";
import { useFocus } from "../../utils/useFocus";

interface NewItemInputProps {
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void;
}

const NewItemInput = ({ value, onChange, onKeyPress }: NewItemInputProps) => {
  const refFocus = useFocus();
  return (
    <input
      ref={refFocus}
      className={styles["container"]}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder="What do you wanna do next?"
    />
  );
};

export default NewItemInput;
