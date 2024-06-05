import { useDispatch } from 'react-redux';
import { addContactInApi } from '../../redux/operations';
import { nanoid } from '@reduxjs/toolkit';
import css from './AddContact.module.css';

export const AddContact = () => {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();
    const contact = { name, number, id };
    dispatch(addContactInApi(contact));
    form.reset();
  }

  return (
    <div className={css.addContactStyle}>
      <form onSubmit={handleSubmit}>
        <label>
          <input placeholder="name" name="name" type="text" />
        </label>
        <label>
          <input placeholder="number" name="number" type="text" />
        </label>
        <button type="submit">
          Add <br />
          contact
        </button>
      </form>
    </div>
  );
};
