import useAuth from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.navStyle}>
      <NavLink to="/goit-react-hw-08-phonebook">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      {!isLoggedIn && (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log in</NavLink>
        </>
      )}
    </nav>
  );
};
