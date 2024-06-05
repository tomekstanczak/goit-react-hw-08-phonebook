import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './Login.module.css';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const loginData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(logIn(loginData));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={css.logInStyle}>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <br />
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};
