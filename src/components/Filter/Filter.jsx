import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({ onChange }) {
  return (
    <input
      type="text"
      name="filter"
      autoComplete="off"
      className={css.filter}
      onChange={e => {
        onChange(e.target.value);
      }}
    />
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
