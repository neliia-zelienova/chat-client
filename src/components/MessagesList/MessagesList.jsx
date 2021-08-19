import ListGroup from "react-bootstrap/ListGroup";
import MessageItem from "./MessageItem";
import InfoMessageItem from "./InfoMessageItem";
import styles from "./MessagesList.module.css";

const MessagesList = ({ messages, currentUsername }) => {
  return (
    <>
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
    </>
  );
};

export default MessagesList;
