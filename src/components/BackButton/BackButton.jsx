import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import routes from 'routes';

const BackButton = () => {
  const location = useLocation();

  return (
    <NavLink className="BackButton" to={location?.state?.from ?? routes.home} type="button">
      Back
    </NavLink>
  );
};

export default BackButton;