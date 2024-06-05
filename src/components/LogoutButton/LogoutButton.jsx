import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import useAuth from '../../hooks/useAuth';
import css from './LogoutButton.module.css';

export const LogoutButton = () => {
  const dispatch = useDispatch();

  const handeLogout = () => {
    dispatch(logout());
  };

  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) return null;
  return (
    <>
      <button type="button" onClick={handeLogout} className={css.logOut}>
        Log out
      </button>
    </>
  );
};
