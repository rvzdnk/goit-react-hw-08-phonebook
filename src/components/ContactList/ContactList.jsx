import { useSelector } from 'react-redux';
import { useGetContactsQuery, useDeleteContactMutation } from 'services/api';
import styles from './ContactList.module.css';

const ContactList = () => {

    const {
        data: contacts = [],
        isLoading,
        isSuccess,
        isError,
        error,
        } = useGetContactsQuery();

    const filter = useSelector(state => state.filter);

    const contactsList = contacts
        .filter(cont => cont.name.toLowerCase().includes(filter))
        .sort((first, second) => first.name.localeCompare(second.name));

    const [deleteItem] = useDeleteContactMutation();

    const { list, list__btn, list__item, list__name } = styles;
    return (
        <div>
            {isLoading && <Loader />}
                <ul className={list}>
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
                </ul>
        </div>
    );
};

export default ContactList;