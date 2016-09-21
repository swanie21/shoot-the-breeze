import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import MessageInput from '../lib/components/MessageInput';

describe('message area in footer',function() {

  const wrapper = shallow(<MessageInput />);

  it('should be rendered into a footer container', function() {
    expect(wrapper.type(), 'footer');
  });

  it('should have an input field', function() {
    expect(wrapper.find('.InputField')).to.have.length(1);
  });

  it('should have user prop', function() {
    expect(wrapper.props().user).to.be.defined;
 });

  it('should have addNewMessage prop', function() {
    expect(wrapper.props().addNewMessage).to.be.defined;
  });

  it('should be able to set draftMessage state', function () {
    const wrapper = mount(<MessageInput />);
    expect(wrapper.state('draftMessage'), '');
    wrapper.setState({ draftMessage: 'It works' });
    expect(wrapper.state('draftMessage'), 'It works');
  });

});
