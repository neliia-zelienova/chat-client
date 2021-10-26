import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Timer from './Timer';

const MessageForm = ({ sendMessage, user, messageState, toggleSent }) => {
  const [message, setMessage] = useState('');

  const handleMessage = e => {
    setMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (message.trim().length) {
      sendMessage(message, user?._id);
    }
  };

  useEffect(() => {
    if (messageState) setMessage('');
  }, [messageState]);
  return (
    <div>
      <Form action="" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="messageForm">
          <Form.Label htmlFor=""></Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            onChange={handleMessage}
            placeholder="Type a message"
            disabled={user?.muted}
          />
          {message.length > 0 && (
            <Form.Text className="text-muted">
              <span
                style={{
                  color: `#${message.length > 200 ? 'c71c1c' : '6c757d'} `,
                }}
              >
                Message length {message.length}
              </span>
            </Form.Text>
          )}
          {messageState && (
            <Form.Text className="text-muted">
              <Timer
                text="Next message in"
                timeout={15}
                timerExceed={toggleSent}
              />
            </Form.Text>
          )}
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          disabled={user?.muted || messageState || message.trim().length > 200}
        >
          Send
        </Button>
      </Form>
    </div>
  );
};

export default MessageForm;
