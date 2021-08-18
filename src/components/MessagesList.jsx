import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MessageItem from "./MessageItem";
import InfoMessageItem from "./InfoMessageItem";
import styles from "./MessagesList.module.css";

const MessagesList = ({ messages, currentUsername }) => {
  return (
    <>
      {messages.length > 0 ? (
        <ListGroup
          as="ul"
          style={{ listStyle: "none" }}
          bsPrefix={styles.message_list}
        >
          {messages
            .map((item) => (
              <ListGroup.Item bsPrefix={styles.list_item} key={item.id} as="li">
                {item?.type === "text" ? (
                  <MessageItem message={item} currentUser={currentUsername} />
                ) : (
                  <InfoMessageItem message={item} />
                )}
              </ListGroup.Item>
            ))
            .reverse()}
        </ListGroup>
      ) : (
        <div className={styles.start_message}>
          <p>Hi! Messages will appear here</p>{" "}
        </div>
      )}
    </>
  );
};

export default MessagesList;
