import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import muted from "../img/mute.svg";
import record from "../img/record.svg";
import ban from "../img/thumb_down.svg";
import unban from "../img/thumb_up.svg";
import online from "../img/online.svg";
import offline from "../img/offline.svg";

const UsersList = ({ users, currentUser, handleBan, handleMute }) => {
  const handleUserBan = (e) => {
    handleBan(e.target.dataset.value);
  };

  const handleUserMute = (e) => {
    handleMute(e.target.dataset.value);
  };
  return (
    <ListGroup>
      {users?.map((user) => (
        <ListGroup.Item key={user._id}>
          <Container>
            <Row>
              <Col as="p">{user.username}</Col>
              <Col>
                <Row>
                  <Image
                    data-value={user._id}
                    width={30}
                    height={30}
                    alt="online state"
                    src={user?.online ? online : offline}
                  />
                </Row>
                <Row>
                  <Col lg={6}>
                    <Image
                      data-value={user._id}
                      width={20}
                      height={20}
                      alt="online state"
                      src={user?.muted ? muted : record}
                    />
                  </Col>
                  <Col lg={6}>
                    <Image
                      data-value={user._id}
                      width={20}
                      height={20}
                      alt="online state"
                      src={user?.banned ? ban : unban}
                    />
                  </Col>
                </Row>
              </Col>

              {currentUser?.admin && currentUser?._id !== user._id && (
                <Col lg={6}>
                  <Row>
                    <Col>
                      <Button
                        size="sm"
                        onClick={handleUserMute}
                        variant={
                          user?.muted ? "outline-success" : "outline-danger"
                        }
                      >
                        <Image
                          data-value={user._id}
                          width={40}
                          height={40}
                          alt="muted state"
                          src={user?.muted ? record : muted}
                        />
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        size="sm"
                        onClick={handleUserBan}
                        variant={
                          user?.banned ? "outline-success" : "outline-danger"
                        }
                      >
                        <Image
                          data-value={user._id}
                          width={40}
                          height={40}
                          alt="muted state"
                          src={user.banned ? unban : ban}
                        />
                      </Button>
                    </Col>
                  </Row>
                </Col>
              )}
            </Row>
          </Container>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default UsersList;
