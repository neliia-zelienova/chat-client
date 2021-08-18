import Header from "../components/Header";
import api from "../services/apiServices";
import BunnedComponent from "../components/BunnedComponent";

const BannedView = ({ updateToken }) => {
  const handleLogout = async () => {
    await api.logout(localStorage.getItem("token"));
    updateToken("");
  };

  return (
    <>
      <Header />
      <BunnedComponent logout={handleLogout} />
    </>
  );
};

export default BannedView;
