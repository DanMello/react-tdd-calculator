import React from 'react';
import Keypad from '../components/Keypad';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

// it('Renders correctly', () => {
//   const tree = renderer
//     .create(<Display displayValue={''}/>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

it('Should render a <div /> with props.', () => {

  const wrapper = shallow(
    <Keypad 
      callOperator={jest.fn()}
      numbers={[]}
      operators={[]}
      setOperator={jest.fn()}
      updateDisplay={jest.fn()}
    />
  );

  expect(wrapper.find('div').length).toEqual(1);
});