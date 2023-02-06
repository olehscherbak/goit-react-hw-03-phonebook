import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList({ contactArray, deleteContact }) {
  return (
    <ul>
      {contactArray.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
