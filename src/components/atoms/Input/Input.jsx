import React from 'react';
import PropTypes  from 'prop-types';

require('./Style.css');

// const Input = props => (
//   <input type={props.type} placeholder={props.placeholder} value={props.text} className="a__input" onChange = {props.} />
// );

// Input.propTypes = {
//   text: PropTypes.string,
//   type: PropTypes.string,
//   placeholder: PropTypes.string,
// };

// export default Input;


const Input = props => <input {...props} />;

Input.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.string,
};
Input.defaultProps = {
  width: '100%',
  height: '42px',
};

export default Input;
