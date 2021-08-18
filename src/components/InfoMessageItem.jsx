import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import styles from "./MessagesList.module.css";

const InfoMessageItem = ({ message }) => {
  return (
    <Card bsPrefix={styles.info_message_card}>
      <Card.Body>
        <Card.Text as="div">
          <p className={styles.info_message_text}>
            <span className={styles.username}>{message.username}</span>
            <span>&nbsp;{message.message}</span>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoMessageItem;
