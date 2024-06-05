import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Buttons } from '../Buttons/Buttons';

export const Layout = () => {
  return (
    <div className={css.shape}>
      <div className={css.insideBorder} />
      <h1>NOKIA</h1>
      <div className={css.screen}>
        <Navigation />
        <Outlet />
      </div>
      <div className={css.buttonContact} />
      <div className={css.buttonDelete} />
      <div className={css.buttonPaginationOne} />
      <div className={css.buttonPaginationTwo} />
      <div className={css.buttonLogOut} />
      <Buttons />
    </div>
  );
};
