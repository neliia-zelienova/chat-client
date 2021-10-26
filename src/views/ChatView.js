import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import MessageForm from '../components/MessageForm';
import UsersList from '../components/UsersList';
import MessagesList from '../components/MessagesList';
import UserInfo from '../components/UserInfo';
import routes from '../routes';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SERVER_URL = process.env.PORT || 'http://localhost:3001/';

const ChatView = ({ updateToken }) => {
  const socket = useRef(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [usersList, setUserList] = useState([]);
  const [messagesList, setMessage] = useState([]);
  const [error, setError] = useState('');
  const [messageSent, setMessagese] = useState(false);
  const history = useHistory();
  const toggleMessageSent = () => {
    setMessagese(prevState => !prevState);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    socket.current = io(SERVER_URL, { query: { token } });

    socket.current.on('user data', data => {
      data && setCurrentUser(data);
    });
    socket.current.on('user data:muted', muted => {
      setCurrentUser(prevData => ({ ...prevData, muted }));
    });
    socket.current.on('user data:banned', banned => {
      setError('ban');
    });
    socket.current.on('connect_error', error => {
      setError(error.message);
    });

    socket.current.on('user disconnected', id => {
      console.log('user disconnected', id);
    });
    socket.current.on('users', data => {
      setUserList(data);
    });
    socket.current.on('history', data => {
      setMessage(() => [...data]);
    });
    socket.current.on('all users', data => {
      setUserList(data);
    });
    socket.current.on('message', data => {
      setMessage(prevState => [...prevState, data]);
    });
    socket.current.on('muted:message', ({ user, toggleMessageData }) => {
      setMessage(prevState => [...prevState, toggleMessageData]);
      setUserList(prevData =>
        prevData.map(item => (item._id === user._id ? user : item)),
      );
    });
    socket.current.on('banned:message', ({ user, toggleMessageData }) => {
      setMessage(prevState => [...prevState, toggleMessageData]);
      setUserList(prevData =>
        prevData.map(item => (item._id === user._id ? user : item)),
      );
    });
    socket.current.on('message:accepted', () => {
      toggleMessageSent();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = (message, user_id) => {
    socket.current.emit('message', message, user_id);
  };

  const handleBan = userId => {
    socket.current.emit('admin:toggle-ban', userId);
  };

  const handleMute = userId => {
    socket.current.emit('admin:toggle-mute', userId);
  };

  useEffect(() => {
    switch (error.toLowerCase().split(' ')[0]) {
      case 'ban':
      case 'banned':
        history.push(routes.banned);
        break;
      case 'token':
        updateToken('');
        history.push(routes.login);
        break;
      case 'double':
        history.push(routes.login);
        break;
      default:
        break;
    }
    return () => socket.current.removeAllListeners();
  }, [error, history, updateToken]);

  const handleLogout = async () => {
    updateToken('');
    socket.current.disconnect();
    socket.current.removeAllListeners();
    history.push(routes.login);
  };

  return (
    <Container>
      <Row>
        <Header handleLogout={handleLogout} />
      </Row>
      <Row>
        <Col lg={currentUser?.admin ? 5 : 3} xs={11}>
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
        <Col>
          <MessagesList
            messages={messagesList}
            currentUsername={currentUser?.username}
          />
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
