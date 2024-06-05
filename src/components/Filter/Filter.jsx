import { useDispatch } from 'react-redux';
import { filtering } from '../../redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = eve => {
    const filterValue = eve.target.value;
    dispatch(filtering(filterValue));
  };

  return (
    <div className={css.filterStyle}>
      <form onChange={handleChange}>
        <label>
          <input name="filter" placeholder="find contact" type="text" />
        </label>
      </form>
    </div>
  );
};
