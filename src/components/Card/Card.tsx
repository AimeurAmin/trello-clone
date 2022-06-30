import styles from "./Cards.module.scss";
import { FC } from "react";

interface CardProps {
  text: string;
}

const Card: FC<CardProps> = ({ text }) => {
  return <div className={styles.container}>{text}</div>;
};

export default Card;
