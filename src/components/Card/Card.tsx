import styles from "./Cards.module.scss";
import { FC } from "react";
import { removeTask } from "../../state/actions";
import { useAppState } from "../../state/AppStateContext";

interface CardProps {
  listId: string;
  id: string;
  text: string;
}

const Card: FC<CardProps> = ({ id, text, listId }) => {
  const { dispatch } = useAppState();
  return (
    <div className={styles.container}>
      {text}
      <div
        className={styles["removeTask"]}
        onClick={() => dispatch(removeTask(id, listId))}
      >
        x
      </div>
    </div>
  );
};

export default Card;
