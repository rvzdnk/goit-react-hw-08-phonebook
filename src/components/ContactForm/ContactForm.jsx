import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

import styles from './ContactForm.module.css';


const ContactForm = ({ onSubmit }) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const getContacts = state => state.contacts;
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContacts({ id: nanoid(), name, number }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
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
        value={name}
        onChange={handleChange}
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
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={form__btn} type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;