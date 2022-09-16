import styles from './Filter.module.css'

export const Filter = ({ filter, onFilter}) => {
  const {filter_input} = styles;
    return (
      <input className={filter_input}
        type="text"
        name="filter"
        value={ filter }
        onChange={onFilter}
        placeholder="Find contacts by name"
      />
    );
  };

export default Filter;