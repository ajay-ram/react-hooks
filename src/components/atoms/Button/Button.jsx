import React      from 'react';
import PropTypes  from 'prop-types';

require('./Style.css');

const Button = props => (
  <button className="btn btn-primary">{props.text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
