import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../components/Calculator';
import Display from '../components/Display';
import Keypad from '../components/Keypad';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
});

it('Renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Should render a <div />', () => {

  const wrapper = shallow(<Calculator />);

  expect(wrapper.find('div').length).toEqual(1);
});

it('should render the Display and Keypad Components with their props', () => {
  
  const wrapper = shallow(<Calculator />);

  expect(wrapper.containsAllMatchingElements([
    <Display displayValue={wrapper.instance().state.displayValue}/>,
    <Keypad 
      callOperator={wrapper.instance().callOperator}
      numbers={wrapper.instance().state.numbers}
      operators={wrapper.instance().state.operators}
      setOperator={wrapper.instance().setOperator}
      updateDisplay={wrapper.instance().updateDisplay}
    />
  ])).toEqual(true);
});