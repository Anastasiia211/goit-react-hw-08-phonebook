import { NavLink } from 'react-router-dom';
import { Menu } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Menu>
      <button className="btn btn-submit">
      <NavLink to="/register">Register</NavLink>
      </button>
      <button className="btn btn-submit">
        <NavLink to="/login">Log In</NavLink>
        </button>
    </Menu>
  );
};