import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/Display.css';

class Display extends Component {

  render() {

    return (
      <div className={styles.displayContainer}>
        {this.props.displayValue}
      </div>
    );
  };
};

Display.propTypes = {
  displayValue: PropTypes.string.isRequired
};

export default Display;