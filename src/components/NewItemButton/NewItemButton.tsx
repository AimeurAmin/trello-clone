import styles from "./NewItemButton.module.scss";

interface NewItemButtonProps {
  onClick(): void;
  children: React.ReactNode;
}
const NewItemButton = ({ onClick }: NewItemButtonProps) => {
  return (
    <button onClick={onClick} className={styles["container"]}>
      Create
    </button>
  );
};

export default NewItemButton;
