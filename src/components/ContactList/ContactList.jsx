import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
    const filtersContacts = (contacts, filter) =>
        contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const contactsList = filtersContacts(contacts, filter);

    const deleteItem = id => {
        dispatch(deleteContacts(id));
    };


    const { list, list__btn, list__item, list__name } = styles;
    return (
        <div>
            <ul className={list}>
                {contactsList.length === 0 ? null : (
                    <>
                        {contactsList.map(({ name, number, id }) => {
                            return (
                                <li className={list__item} key={id}>
                                    <span className={list__name}>{name}:</span> {number}
                                    <button className={list__btn} onClick={() => deleteItem(id)}>
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