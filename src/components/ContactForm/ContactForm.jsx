import React, { Component } from 'react';
import styles from './ContactForm.module.css';

const INITIAL_STATE = {
    name: "",
    number: "",
  };

export class ContactForm extends Component {
    state={...INITIAL_STATE};

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewContact({...this.state})
        this.setState({ ...INITIAL_STATE });
    };

    render(){
        const {name, number} =this.state;
        const {form, form__btn, form__input, form__label}=styles
        return (
                <form className={form} onSubmit={this.handleSubmit}>
                  <label className={form__label}htmlFor="name">Name</label>
                  <input className={form__input}
                    type="text"
                    name="name"
                    id="name"
                    placeholder='Enter name'
                    value={name}
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                  />
                  <button className={form__btn} type="submit">Add contact</button>
                </form>
            );
          }
    }



export default ContactForm;