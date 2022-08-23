import styles from './Filter.module.css'

export const Filter = ({searchByName}) => {
  const {filter} = styles;
    return (
      <input className={filter}
        type="text"
        onChange={searchByName}
        placeholder="Find contacts by name"
      />
    );
  };

export default Filter;