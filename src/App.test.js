import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount, render, shallow, configure} from 'enzyme';
import App, {increment, decrement} from './App';
import Display from './Display';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * Describe defines the test suite.
*/
describe('Local State', () => {
  /**
   * It defines the test cases.
   */
  it('should increment the counter in state', () => {
    const counter = 0;
    const newCounter = increment(counter);
    expect(newCounter).to.equal(1);
  });

  it('should decrement the counter in state', () => {
    const counter = 0;
    const newCounter = decrement(counter)  ;
    expect(newCounter).to.equal(-1);
  });
});

describe('App component', () => {
  it('one Display component in App', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.find(Display)).to.have.length(1);
  });

  it('passes all props to Display', () => {
    const wrapper = shallow(<App />);

    let displayWrapper = wrapper.find(Display);
    expect(displayWrapper.props().data).to.equal(0);

    

    displayWrapper = wrapper.find(Display);
    expect(displayWrapper.props().data).to.equal(-1);
  });
});