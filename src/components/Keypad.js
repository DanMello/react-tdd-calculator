import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from 'styles/Display.css';

class Keypad extends Component {

  render() {

    return (
      <div>Hello</div>
    );
  };
};

Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
}

export default Keypad;