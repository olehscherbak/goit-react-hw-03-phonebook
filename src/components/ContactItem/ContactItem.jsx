import PropTypes from 'prop-types';
import { GiRotaryPhone } from 'react-icons/gi';
import css from './ContactItem.module.css';

export default function ContactItem({ id, name, number, deleteContact }) {
  return (
    <li className={css.contactRow}>
      <span className={css.contactItem}>
        <GiRotaryPhone />
        <span className={css.contactInfo}>
          <span className={css.name}>{name}</span>
          <span className={css.number}>{number}</span>
        </span>
      </span>
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
