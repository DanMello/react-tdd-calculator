import React, { Component } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import styles from 'styles/Calculator.css';

export default class Calculator extends Component {

  constructor() {
    super()

    this.state = {
      displayValue: '0',
      numbers: [],
      operators: [],
      selectedOperator: '',
      storedValue: ''
    };

    this.callOperator = this.callOperator.bind(this)
    this.setOperator = this.setOperator.bind(this)
    this.updateDisplay = this.updateDisplay.bind(this)
  };

  callOperator() {
    console.log('call operator')
  };

  setOperator() {
    console.log('set operation')
  };

  updateDisplay() {
    console.log('update display')
  };

  render() {
    return (
      <div className={styles.calculatorContainer}>
        <Display displayValue={this.state.displayValue} />
        <Keypad
          callOperator={this.callOperator}
          numbers={this.state.numbers}
          operators={this.state.operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  };
};