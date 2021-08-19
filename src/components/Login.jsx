import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const renderUsernameTooltip = (props) => (
  <Tooltip id="username-tooltip" {...props}>
    Minimum three characters, without special characters
  </Tooltip>
);

const renderPasswordTooltip = (props) => (
  <Tooltip id="password-tooltip" {...props}>
    Minimum six characters, at least one letter, one number and one special
    character
  </Tooltip>
);

const Login = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameValid, setUsernameValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);

  const handleUsername = (e) => {
    setUsername(e.target.value);
    validateUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    onSubmit(username, password);
    setUsername("");
    setPassword("");
  };

  const validateUsername = (username) => {
    const regex = /[A-Za-z0-9]{3,}/;
    setUsernameValid(regex.test(String(username).toLowerCase()));
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    setPasswordValid(regex.test(String(password).toLowerCase()));
  };

  const getMessage = () => {
    if (username.trim().length === 0) return "Enter Username";
    else if (password.trim().length === 0) return "Enter password";
    else if (!isUsernameValid) return "Invalid username";
    else if (!isPasswordValid) return "Invalid password";
    else return "Login!";
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {getMessage()}
    </Tooltip>
  );

  return (
    <Form onSubmit={handleLogin}>
      <Row className="mb-3" sm={8} xs={6} style={{ justifyContent: "center" }}>
        <Col sm={6} xs={10}>
          <Form.Group
            controlId="exampleForm.ControlInput1"
            style={{ marginBottom: "15px" }}
          >
            <Row sm={6} style={{ justifyContent: "center" }}>
              <Col sm={3}>
                <Form.Label column>Username</Form.Label>
              </Col>
              <Col sm={8}>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderUsernameTooltip}
                >
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsername}
                  />
                </OverlayTrigger>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            style={{ marginBottom: "15px" }}
          >
            <Row sm={6} style={{ justifyContent: "center" }}>
              <Col sm={3}>
                <Form.Label column>Password</Form.Label>
              </Col>
              <Col sm={8}>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderPasswordTooltip}
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                  />
                </OverlayTrigger>
              </Col>
            </Row>
          </Form.Group>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <span className="d-inline-block">
              <Button
                variant={
                  isPasswordValid &&
                  isUsernameValid &&
                  password.trim().length > 0 &&
                  username.trim().length > 0
                    ? "primary"
                    : "danger"
                }
                type="submit"
                disabled={
                  !(
                    isPasswordValid &&
                    isUsernameValid &&
                    password.trim().length > 0 &&
                    username.trim().length > 0
                  )
                }
              >
                Login
              </Button>
            </span>
          </OverlayTrigger>
        </Col>
      </Row>
    </Form>
  );
};

export default Login;
