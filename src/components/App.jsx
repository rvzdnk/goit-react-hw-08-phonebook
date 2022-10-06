import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './App.module.css';



export function App() {

    const { container, container__header} = styles
    return (
    <div className={container}>
      <h2 className={container__header}>Phonebook</h2>
      <ContactForm/>
      <Filter/>
      <ContactList/>
    </div>
    );
}
