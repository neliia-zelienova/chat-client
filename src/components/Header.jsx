import Button from "react-bootstrap/Button";
import { Container, Row, Col, Figure, Image } from "react-bootstrap";
import styles from "./Header.module.css";
import logout from "../img/logout.svg";
import logo from "../img/chat.svg";

const Header = ({ handleLogout }) => {
  return (
    <Container>
      <Row style={{ alignSelf: "center" }}>
        <div className={styles.header}>
          <Row style={{ alignSelf: "center", alignItems: "center" }}>
            <Col lg={2} md={2} xs={3}>
              <h1>Chat</h1>
            </Col>
            <Col lg={9} md={7} xs={6}>
              <Image width={45} height={45} alt="logo" src={logo} />
            </Col>
            {handleLogout && (
              <Col>
                <Button
                  onClick={() => handleLogout()}
                  bsPrefix={styles.logout_button}
                ></Button>
              </Col>
            )}
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default Header;
