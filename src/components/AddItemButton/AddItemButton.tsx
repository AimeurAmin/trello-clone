import styles from "./AddItemButton.module.scss";

interface AddItemButtonProps {
  dark: boolean;
  onClick(): void;
  children?: React.ReactNode;
}

const AddItemButton = ({ dark, onClick }: AddItemButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles["container"]} ${styles[dark ? "dark" : "notDark"]}`}
    >
      {`+ Add another ${dark ? "task" : "list"}`}
    </button>
  );
};

export default AddItemButton;
