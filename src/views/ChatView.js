import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import MessageForm from "../components/MessageForm";
import UsersList from "../components/UsersList";
import MessagesList from "../components/MessagesList";
import UserInfo from "../components/UserInfo";
import { useHistory } from "react-router-dom";
import routes from "../routes";
import { Container, Row, Col } from "react-bootstrap";

const ChatView = ({ updateToken }) => {
  const socket = useRef(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [usersList, setUserList] = useState([]);
  const [messagesList, setMessage] = useState([]);
  const [error, setError] = useState("");

  const [messageSent, setMessagese] = useState(false);

  const toggleMessageSent = () => {
    setMessagese((prevState) => !prevState);
  };

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    socket.current = io("http://localhost:3001/", { query: { token } });

    socket.current.on("user data", (data) => {
      data && setCurrentUser(data);
    });
    socket.current.on("connect_error", (error) => {
      setError(error.message);
    });

    socket.current.on("user disconnected", (id) => {
      console.log("user disconnected", id);
    });
    socket.current.on("users", (data) => {
      setUserList(data);
    });
    socket.current.on("banned", (data) => {
      setError(data);
    });
    socket.current.on("all users", (data) => {
      setUserList(data);
    });
    socket.current.on("message", (data) => {
      setMessage((prevState) => [...prevState, data]);
    });
    socket.current.on("message:accepted", () => {
      toggleMessageSent();
    });
    socket.current.on("message:wait timeout", () => {
      console.log("message denided of timeout");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = (message) => {
    socket.current.emit("message", message, currentUser._id);
  };

  const handleBan = (userId) => {
    socket.current.emit("admin:toggle-ban", userId);
  };

  const handleMute = (userId) => {
    socket.current.emit("admin:toggle-mute", userId);
  };

  useEffect(() => {
    if (error === "Token error") {
      updateToken("");
      history.push(routes.login);
    }
    if (error.toLowerCase().includes("banned")) history.push(routes.banned);
  }, [error, history, updateToken]);

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <UserInfo user={currentUser} />
          </Row>
          <Row>
            <UsersList
              users={usersList}
              currentUser={currentUser}
              handleBan={handleBan}
              handleMute={handleMute}
            />
          </Row>
        </Col>
        <Col lg={currentUser?.admin ? 7 : 9}>
          <MessagesList messages={messagesList} />
          <MessageForm
            sendMessage={sendMessage}
            user={currentUser}
            messageState={messageSent}
            toggleSent={toggleMessageSent}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ChatView;
