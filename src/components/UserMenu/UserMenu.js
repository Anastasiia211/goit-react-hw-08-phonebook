import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { useAuth } from 'hooks';
import { Menu } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Menu>
      <p className="username">
        Welcome, <b>{user.name}</b>
      </p>
      <button type="button" className="btn btn-submit" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Menu>
  );
};