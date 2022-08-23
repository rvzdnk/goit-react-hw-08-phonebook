import React from 'react';
import styles from './ContactList.module.css';

export const ContactList =({contacts, removeContact}) => {
    const {list, list__btn, list__item, list__name} = styles;
    return (
        <div>
            <ul className={list}>
                {contacts.map(({id, name, number}) =>{
                    return (
                    <li className={list__item} key={id}>
                    <span className={list__name}>{name}:</span> {number}
                    <button className={list__btn} onClick={()=>{removeContact(id)}}>
                       ⛌
                    </button>
                    </li>
                )})}
            </ul>
        </div>
    );
}

export default ContactList;