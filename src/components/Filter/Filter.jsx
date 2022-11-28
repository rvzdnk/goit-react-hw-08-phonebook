import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/Actions';
import styles from './Filter.module.css'

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = e => {
    e.preventDefault();
    const value = e.target.value.toLowerCase();
    dispatch(filterContacts(value))
  };

  const {filter_input} = styles;
    return (
      <input className={filter_input}
        type="text"
        name="filter"
        onChange={onFilter}
        placeholder="Find contacts by name"
      />
    );
  };

export default Filter;