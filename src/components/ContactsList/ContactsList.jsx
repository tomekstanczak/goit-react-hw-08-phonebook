import { useDispatch, useSelector } from 'react-redux';
import { deleteContactInApi } from '../../redux/operations';
import { AddContact } from '../AddContact/AddContact';
import { Filter } from '../Filter/Filter';
import { LogoutButton } from '../LogoutButton/LogoutButton';
import { getContactsFromApi } from '../../redux/operations';
import { useEffect, useState } from 'react';
import {
  selectContacts,
  selectErr,
  selectFilterValue,
  selectLoading,
} from '../../redux/selectors';
import css from './ContactList.module.css';
import { Pagination } from '../Pagination/Pagination';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);
  const loading = useSelector(selectLoading);
  const err = useSelector(selectErr);

  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 1;

  useEffect(() => {
    dispatch(getContactsFromApi());
  }, [dispatch]);

  const filteringContacts = () => {
    if (filterValue === '') {
      return contacts;
    } else {
      return contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
          contact.number.includes(filterValue)
      );
    }
  };

  const handleDeleteClick = id => {
    dispatch(deleteContactInApi(id));
  };

  const filterResults = filteringContacts();

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = filterResults.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const totalPages = Math.ceil(filterResults.length / contactsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div>
      <AddContact />
      <Filter />
      <div className={css.contactsBox}>
        <Pagination
          currentPage={currentPage}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          totalPages={totalPages}
        />
        <div className={css.contactStyle}>
          <h2 className={css.hTextStyle}>Contacts</h2>
          <ul className={css.contactList}>
            {currentContacts.map(contact => (
              <li key={contact.id} className={css.list}>
                {contact.name}: {contact.number}{' '}
                <button
                  type="button"
                  onClick={() => handleDeleteClick(contact.id)}
                  className={css.contactButton}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          {loading && !err && <p>loading ...</p>}
        </div>
      </div>
      <LogoutButton />
    </div>
  );
};
