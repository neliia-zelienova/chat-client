import Header from '../components/Header';
import api from '../services/apiServices';
import Login from '../components/Login';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const formLoginError = error => {
  if (error.includes('400')) {
    return 'Invalid login data';
  } else if (error.includes('404')) {
    return 'Error. Try again later';
  } else if (error.includes('50')) {
    return 'Server error';
  }
};

const LoginView = ({ updateToken }) => {
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async (username, password) => {
    const data = await api.login(username, password);

    if (data?.data?.token) {
      setToken(data.data.token);
      setError('');
    } else {
      setError(data);
    }
  };

  useEffect(() => token && updateToken(token), [token, updateToken]);

  return (
    <Container>
      <Header />
      <Login onSubmit={handleLogin} />
      {error && <p>Login error: {formLoginError(error)}</p>}
    </Container>
  );
};

export default LoginView;
