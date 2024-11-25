import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={css.li}>
      <div className={css.containerLi}>
        <div className={css.liInfo}>
          <FaUser className={css.icon} />
          <span className={css.name}>{name}</span>
        </div>
        <div className={css.liInfo}>
          <FaPhone className={css.icon} />
          <span className={css.number}>{number}</span>
        </div>
      </div>
      <button className={css.btn} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
