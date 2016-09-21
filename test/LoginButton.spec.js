import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import LoginButton from '../lib/components/LoginButton';

describe('login button component',function() {

  const wrapper = shallow(<LoginButton/>);

  it('should be rendered into a section container', function() {
    expect(wrapper.type(), 'section');
  });

  it('should have 1 login button', function() {
    expect(wrapper.find('.LoginButton')).to.have.length(1);
  });

  it('should have attributes for className, onclick, type, and value', function() {
    expect(wrapper.props('className')).to.be.defined;
    expect(wrapper.props('onClick')).to.be.defined;
    expect(wrapper.props('type')).to.be.defined;
    expect(wrapper.props('value')).to.be.defined;
  });

});
