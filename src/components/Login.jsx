import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = ({ onSubmit }) => {
  const [username, setUsername] = useState("test");
  const [password, setPassword] = useState("test");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    onSubmit(username, password);
    setUsername("");
    setPassword("");
  };

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
                <Form.Control
                  type="text"
                  placeholder="test"
                  value={username}
                  onChange={handleUsername}
                />
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
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePassword}
                />
              </Col>
            </Row>
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Login;
