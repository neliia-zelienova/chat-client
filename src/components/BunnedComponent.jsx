import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BunnedComponent = ({ logout }) => {
  return (
    <Container>
      <Row>
        <p>It seems like you were banned by an admin...</p>
      </Row>
      <Row>
        <p>Wait anti he/she'll unbanned you or</p>
      </Row>
      <Row
        xs={4}
        sm={6}
        style={{ justifyContent: "center", alignItems: "baseline" }}
      >
        <Col as={Button} variant="warning" onClick={() => logout()}>
          Logout
        </Col>
      </Row>
    </Container>
  );
};

export default BunnedComponent;
