import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './App.module.css';


export function App () {

  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
    );
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = data => {
    if (contacts.some(contact => contact.name === data.name)) {
      alert(`${data.name} already exists`);
      return;
    };

       setContacts(contacts => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return [newContact, ...contacts];
    });
    setName('');
    setNumber('');
  };

  const filteredContacts = e => {
    setFilter(e.currentTarget.value);
   }

  const removeContact = (contactId) =>{
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const searchByName = (contacts, filter) =>{
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

    const { container, container__header} = styles
    return (
    <div className={container}>
      <h2 className={container__header}>Phonebook</h2>
      <ContactForm
          onSubmit={addNewContact}
          name={name} number={number}
        />
      <Filter
          onFilter={filteredContacts } />
      <ContactList
        contacts={searchByName(contacts, filter)}
        onRemove={removeContact}/>
    </div>
    );
}
