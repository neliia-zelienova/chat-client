import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MessageItem from "./MessageItem";
import InfoMessageItem from "./InfoMessageItem";
import styles from "./MessagesList.module.css";

const MessagesList = ({ messages }) => {
  return (
    <ListGroup>
      {messages.map((item) => (
        <ListGroup.Item bsPrefix={styles.list_item} key={item.id}>
          <Row>
            {item?.type === "text" ? (
              <Col lg={9}>
                <MessageItem message={item} />
              </Col>
            ) : (
              <Col lg={7}>
                <InfoMessageItem message={item} />
              </Col>
            )}
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default MessagesList;
