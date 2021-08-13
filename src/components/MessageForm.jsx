import { useEffect } from "react";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Timer from "./Timer";

const MessageForm = ({ sendMessage, user, messageState, toggleSent }) => {
  const [message, setMessage] = useState("");

  const handleMessage = (e) => {
    setMessage(e.target.value.slice(0, 200));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim().length) {
      sendMessage(message, user?._id);
    }
  };

  useEffect(() => {
    if (messageState) setMessage("");
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
          <Form.Text className="text-muted">
            Message length {message.length}
          </Form.Text>
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
          disabled={user?.muted || messageState}
        >
          Send
        </Button>
      </Form>
    </div>
  );
};

export default MessageForm;
