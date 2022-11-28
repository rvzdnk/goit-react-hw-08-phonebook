import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';
import { useAddContactMutation, useGetContactsQuery } from '../../services/phonebookApi';


const ContactForm = () => {

  const { data: contacts = [] } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      try {
        await addContact({
          id: nanoid(),
          name,
          number,
        });
      } catch (error) {
        alert(`Failed! Save error`);
      }
      form.reset();
    }
  };

  const {form, form__btn, form__input, form__label}=styles

  return (
    <form className={form} onSubmit={handleSubmit}>
      <label className={form__label} htmlFor="name">Name</label>
      <input className={form__input}
        type="text"
        name="name"
        id="name"
        placeholder='Enter name'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={form__label} htmlFor="number">Number</label>
      <input className={form__input}
        type="tel"
        name="number"
        id="number"
        placeholder='Enter phone number'
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={form__btn} type="submit">Add contact</button>
    </form>
  );
}

  export default ContactForm;