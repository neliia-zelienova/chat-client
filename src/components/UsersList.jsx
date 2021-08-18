import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import muted from "../img/mute.svg";
import record from "../img/record.svg";
import ban from "../img/ban.svg";
import unban from "../img/unban.svg";
import styles from "./UserList.module.css";

const UsersList = ({ users, currentUser, handleBan, handleMute }) => {
  const handleUserBan = (e) => {
    handleBan(e.target.dataset.value);
  };

  const handleUserMute = (e) => {
    handleMute(e.target.dataset.value);
  };
  return (
    <ListGroup
      as="ul"
      style={{ listStyle: "none", paddingLeft: "10px", paddingRight: "10px" }}
    >
      {users?.map((user) => (
        <ListGroup.Item key={user._id} bsPrefix={styles.list_item} as="li">
          <Row style={{ alignSelf: "center" }}>
            <Col as="div" lg={5} md={4} xs={3}>
              <span style={{ color: `#${user.color}` }}>{user.username}</span>
            </Col>
            <Col lg={3} md={4} xs={4}>
              <Row>
                <Col style={{ alignSelf: "center" }} lg={3} md={4} xs={3}>
                  <div
                    className={user.online ? styles.online : styles.offline}
                  ></div>
                </Col>
                <Col lg={3} md={4} xs={3}>
                  <Image
                    width={25}
                    height={25}
                    alt="muted state"
                    src={user.muted ? muted : record}
                  />
                </Col>
                {currentUser.admin && (
                  <Col lg={3} md={4} xs={3}>
                    <Image
                      width={25}
                      height={25}
                      alt="banned state"
                      src={user.banned ? ban : unban}
                    />
                  </Col>
                )}
              </Row>
            </Col>

            {currentUser?.admin && currentUser?._id !== user._id && (
              <Col>
                <Row>
                  <Col lg={5} md={4} xs={4}>
                    <Button
                      data-value={user._id}
                      size="sm"
                      onClick={handleUserMute}
                      variant={
                        user?.muted ? "outline-success" : "outline-danger"
                      }
                    >
                      <Image
                        data-value={user._id}
                        width={25}
                        height={25}
                        alt="muted state"
                        src={user?.muted ? record : muted}
                      />
                    </Button>
                  </Col>
                  <Col lg={5} md={4} xs={4}>
                    <Button
                      data-value={user._id}
                      size="sm"
                      onClick={handleUserBan}
                      variant={
                        user?.banned ? "outline-success" : "outline-danger"
                      }
                    >
                      <Image
                        data-value={user._id}
                        width={25}
                        height={25}
                        alt="muted state"
                        src={user.banned ? unban : ban}
                      />
                    </Button>
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default UsersList;
