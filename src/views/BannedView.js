import api from "../services/apiServices";

const BannedView = ({ updateToken }) => {
  const handleLogout = async () => {
    await api.logout(localStorage.getItem("token"));
    updateToken("");
  };

  return (
    <div>
      <p>It seems like you were banned by an admin...</p>
      <p>Wait anti he/shewill unbanned you</p>
      <p>
        You can <button onClick={handleLogout}>Logout</button> here
      </p>
    </div>
  );
};

export default BannedView;
