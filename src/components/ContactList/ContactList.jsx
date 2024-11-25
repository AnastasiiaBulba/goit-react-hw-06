import { useSelector, useDispatch } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  // Отримуємо список контактів
  const contacts = useSelector(selectContacts);
  // Отримуємо значення фільтра
  const filter = useSelector(selectNameFilter);

  // Фільтруємо контакти на основі фільтра
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          //    Використовуємо dispatch для видалення
          onDelete={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
