import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import SubmitButton from '../lib/components/SubmitButton';

describe('submit button component',function() {

  const wrapper = shallow(<SubmitButton/>);

  it('should be rendered into a section container', function() {
    expect(wrapper.type(), 'section');
  });

  it('should have 1 submit button', function() {
    expect(wrapper.find('.SubmitButton')).to.have.length(1);
  });

  it('should have attributes for className, onclick, disabled, type, and value', function() {
    expect(wrapper.props('className')).to.be.defined;
    expect(wrapper.props('onClick')).to.be.defined;
    expect(wrapper.props('disabled')).to.be.defined;
    expect(wrapper.props('type')).to.be.defined;
    expect(wrapper.props('value')).to.be.defined;
  });

});
