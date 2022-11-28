import { useDeleteContactMutation } from '../../services/phonebookApi';
import styles from './ContactElement.module.css';

const ContactElement = ({ id, name, number }) => {

    const [deleteItem] = useDeleteContactMutation();
    const { list__btn, list__item, list__name } = styles;

    return (
        <li className={list__item} key={id}>
            <span className={list__name}>{name}:</span> {number}
            <button className={list__btn} onClick={() => { deleteItem(id); }}>
                ⛌
            </button>
        </li>
    );
};

export default ContactElement;