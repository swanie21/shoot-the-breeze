import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import ClearButton from '../lib/components/ClearButton';

describe('clear button component',function() {

  const wrapper = shallow(<ClearButton/>);

  it('should be rendered into a section container', function() {
    expect(wrapper.type(), 'section');
  });

  it('should have 1 clear button', function() {
    expect(wrapper.find('.ClearButton')).to.have.length(1);
  });

  it('should have draftMessage prop', function() {
    expect(wrapper.props().draftMessage).to.be.defined;
 });

 it('should have clearMessage prop', function() {
   expect(wrapper.props().clearMessage).to.be.defined;
});

  it('should have attributes for className, onclick, and disabled', function() {
    expect(wrapper.props('className')).to.be.defined;
    expect(wrapper.props('onClick')).to.be.defined;
    expect(wrapper.props('disabled')).to.be.defined;
  });

});
