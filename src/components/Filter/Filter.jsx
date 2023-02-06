import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({ onChange }) {
  const filterValuePass = e => {
    onChange(e.target.value);
  };
  return (
    <input
      type="text"
      name="filter"
      autoComplete="off"
      className={css.filter}
      onChange={filterValuePass}
    />
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
