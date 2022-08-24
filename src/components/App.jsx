import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './App.module.css';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount(){
    try{
    const json = localStorage.getItem('contacts');
    const contacts = JSON.parse(json);
    this.setState(()=>({contacts}));
  } catch (error){
    console.log(error);
  }};

  componentDidUpdate(prevStates){
  if(prevStates.contacts !== this.state.contacts){
    const json = JSON.stringify(this.state.contacts);
    localStorage.setItem('contacts', json);
  }};

  addNewContact = ({name,number}) => {
      const contact = {id: nanoid(), name, number}
      const {contacts} = this.state;
      if (contacts.find(c => c.name === name)){
        alert(`${name} is already in contacts`)      } else {
        this.setState({
          contacts: [contact, ...contacts]});
      }
    };

  removeContact = (id) =>{
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id)}))
  };

  filteredContacts = () =>{
    const { contacts, filter } = this.state;
    return contacts.filter(c => c.name.toLowerCase().includes(filter))
  };

  searchByName = (e) =>{
    this.setState({filter: e.target.value.toLowerCase()})
  };

  render(){
    const { container, container__header} = styles
    return (
    <div className={container}>
      <h2 className={container__header}>Phonebook</h2>
      <ContactForm
      addNewContact={this.addNewContact}/>
      <Filter
      searchByName={this.searchByName}/>
      <ContactList
      contacts={this.filteredContacts()}
      removeContact={this.removeContact}/>
    </div>
    );
  }
}
