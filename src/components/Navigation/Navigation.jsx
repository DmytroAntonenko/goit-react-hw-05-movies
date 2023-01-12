import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => (
  
  <nav className="Navigation">
    <NavLink
      to={routes.home}
      className={({ isActive }) => (isActive ? 'ActiveLinkNav' : 'Home')}>
      Home
    </NavLink>
    <NavLink to={routes.movies} className={({ isActive }) => (isActive ? 'ActiveLinkNav' : 'Home')}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;