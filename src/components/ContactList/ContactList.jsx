import Loader from '../Loader/Loader';
import ContactElement from '../ContactElement/ContactElement';
import { useSelector } from 'react-redux';
import { useGetContactsQuery} from '../../services/phonebookApi';
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


    const { list } = styles;
    return (
        <div>
            {isLoading && <Loader />}
            {isSuccess &&
                (contacts?.length > 0 ? (
                <ul className={list}>
                    {contactsList.map(({ name, number, id }) => {
                        return <ContactElement key={id} id={id} name={name} number={number}/>
                    })}
                </ul>
            ) : (
                <p className={list}> No contacts available </p>
                ))}
            {isError && <p className={list}> Error: {error} </p>}
        </div>
    );
};

export default ContactList;