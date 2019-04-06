import React from 'react';
import Display from '../components/Display';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('Renders correctly', () => {
  const tree = renderer
    .create(<Display displayValue={''}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Should render a <div />', () => {

  const wrapper = shallow(<Display displayValue={''}/>);

  expect(wrapper.find('div').length).toEqual(1);
});

it('renders the value of displayValue', () => {
  
  const wrapper = shallow(<Display displayValue={''}/>);

  wrapper.setProps({ displayValue: 'test' });
  expect(wrapper.text()).toEqual('test');
});