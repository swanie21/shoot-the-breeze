import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';
import { expect } from 'chai';
import Application from '../lib/components/Application';


describe('application', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'div');
  });
});
