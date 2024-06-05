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
          <NavLink to="/goit-react-hw-08-phonebook/register">Register</NavLink>
          <NavLink to="/goit-react-hw-08-phonebook/login">Log in</NavLink>
        </>
      )}
    </nav>
  );
};
