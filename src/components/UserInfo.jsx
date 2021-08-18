import { Container, Col, Row, Figure } from "react-bootstrap";
import muted from "../img/mute.svg";
import record from "../img/record.svg";

const UserInfo = ({ user }) => {
  return (
    <Container>
      <Row>
        <Col style={{ alignSelf: "center" }} as="p">
          {`${user?.admin ? "Administrator:" : "Username:"}`}
          <span style={{ color: `#${user?.color}` }}>
            &nbsp;{user?.username}
          </span>
        </Col>
        <Col style={{ alignSelf: "center" }}>
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
