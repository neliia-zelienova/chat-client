import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import styles from "./MessagesList.module.css";

const MessageItem = ({ message }) => {
  return (
    <Card bsPrefix={styles.message_card}>
      <Card.Header bsPrefix={styles.message_username}>
        <p>{message.username}</p>
      </Card.Header>
      <Card.Body>
        <Card.Text bsPrefix={styles.message_text} as="p">
          {message.message}
        </Card.Text>
      </Card.Body>
      <Card.Footer bsPrefix={styles.message_footer} className="text-muted">
        {message.messageDate}
      </Card.Footer>
    </Card>
  );
};

export default MessageItem;

<ListGroup.Item>
  <Card border="dark"></Card>
</ListGroup.Item>;
