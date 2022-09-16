import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemove }) => {
    const { list, list__btn, list__item, list__name } = styles;
    return (
        <div>
            <ul className={list}>
                {contacts.length === 0 ? null : (
                    <>
                        {contacts.map(contact => {
                            return (
                                <li className={list__item} key={contact.id}>
                                    <span className={list__name}>{contact.name}:</span> {contact.number}
                                    <button className={list__btn} onClick={() => { onRemove(contact.id); }}>
                                        ⛌
                                    </button>
                                </li>
                            );
                        })}
                    </>
                )}
            </ul>
        </div>
    );
};

export default ContactList;