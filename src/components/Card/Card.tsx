import styles from "./Cards.module.scss";
import { FC } from "react";

interface CardProps {
  id: string;
  text: string;
}

const Card: FC<CardProps> = ({ id, text }) => {
  return <div className={styles.container}>{text}</div>;
};

export default Card;
