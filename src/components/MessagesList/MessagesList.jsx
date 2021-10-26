import ListGroup from 'react-bootstrap/ListGroup';
import MessageItem from './MessageItem';
import InfoMessageItem from './InfoMessageItem';
import styles from './MessagesList.module.css';

const MessagesList = ({ messages, currentUsername }) => {
  return (
    <>
      <ListGroup
        as="ul"
        style={{ listStyle: 'none' }}
        bsPrefix={styles.message_list}
      >
        {messages
          .map(item => (
            <ListGroup.Item bsPrefix={styles.list_item} key={item?._id} as="li">
              {item?.type === 'info' ? (
                <InfoMessageItem message={item} />
              ) : (
                <MessageItem message={item} currentUser={currentUsername} />
              )}
            </ListGroup.Item>
          ))
          .reverse()}
      </ListGroup>
    </>
  );
};

export default MessagesList;
