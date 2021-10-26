import Header from '../components/Header';
import BunnedComponent from '../components/BunnedComponent';

const BannedView = ({ updateToken }) => {
  const handleLogout = async () => {
    updateToken('');
  };

  return (
    <>
      <Header />
      <BunnedComponent logout={handleLogout} />
    </>
  );
};

export default BannedView;
