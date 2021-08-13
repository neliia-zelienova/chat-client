import { Container, Col, Row, Figure } from "react-bootstrap";
import muted from "../img/mute.svg";
import record from "../img/record.svg";

const UserInfo = ({ user }) => {
  return (
    <Container>
      <Row>
        <Col>
          <p>{`${user?.admin ? "Administrator:" : "Username:"} ${
            user?.username
          }`}</p>
        </Col>
        <Col>
          <Figure>
            <Figure.Image
              width={40}
              height={40}
              alt="muted state"
              src={user?.muted ? muted : record}
            />
          </Figure>
        </Col>
      </Row>
    </Container>
  );
};

export default UserInfo;
