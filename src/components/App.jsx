import { useEffect } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { useDispatch } from 'react-redux';
// import { getContactsFromApi } from '../redux/operations';
import { RegisterForm } from './RegisterForm/RegisterForm';
import useAuth from '../hooks/useAuth';
import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import PrivateRoute from './PrivateRoute';
import { Login } from './Login/Login';
import { refreshUser } from '../redux/auth/operations';
import { Home } from './Home/Home';
export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>loading ...</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/goit-react-hw-08-phonebook/register"
            element={
              <PrivateRoute
                Component={<RegisterForm />}
                redirecTo="/goit-react-hw-08-phonebook/contacts"
              />
            }
          />
          <Route
            path="/goit-react-hw-08-phonebook/login"
            element={
              <PrivateRoute
                Component={<Login />}
                redirecTo="/goit-react-hw-08-phonebook/contacts"
              />
            }
          />
          <Route
            path="/goit-react-hw-08-phonebook/contacts"
            element={
              <ProtectedRoute
                Component={<ContactsList />}
                redirecTo="/goit-react-hw-08-phonebook/login"
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
