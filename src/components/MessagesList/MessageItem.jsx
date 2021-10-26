import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import styles from './MessagesList.module.css';

const getFormattedDate = date => {
  let options = {
    timeZone: 'Europe/Kiev',
    hour12: false,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  return new Date(date).toLocaleString([], options);
};

const MessageItem = ({ message, currentUser }) => {
  return (
    <Card
      bsPrefix={
        message.user?.username === currentUser
          ? [styles.message_card, styles.currentUser].join(' ')
          : styles.message_card
      }
    >
      <Card.Header
        bsPrefix={styles.message_username}
        style={{ color: `#${message.user?.color}` }}
      >
        <p>{message.user?.username}</p>
      </Card.Header>
      <Card.Body>
        <Card.Text
          bsPrefix={styles.message_text}
          as="p"
          style={{ color: `#${message.user?.color}` }}
        >
          {message.text}
        </Card.Text>
      </Card.Body>
      <Card.Footer bsPrefix={styles.message_footer} className="text-muted">
        {getFormattedDate(message.updatedAt)}
      </Card.Footer>
    </Card>
  );
};

export default MessageItem;

<ListGroup.Item>
  <Card border="dark"></Card>
</ListGroup.Item>;
