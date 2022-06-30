import styles from "./NewItemInput.module.scss";

interface NewItemInputProps {
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  reference: React.MutableRefObject<HTMLInputElement>;
}

const NewItemInput = ({ value, onChange, reference }: NewItemInputProps) => {
  return (
    <input
      ref={reference}
      className={styles["container"]}
      value={value}
      onChange={onChange}
      placeholder="What do you wanna do next?"
    />
  );
};

export default NewItemInput;
