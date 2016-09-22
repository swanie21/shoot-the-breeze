import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, assert } from 'chai';
import MessageInput from '../lib/components/MessageInput';

describe('message input component',function() {

  const wrapper = shallow(<MessageInput />);

  it('should be rendered into a section container', function() {
    expect(wrapper.type(), 'section');
  });

  it('should have an input field', function() {
    expect(wrapper.find('.InputField')).to.have.length(1);
  });

  it('should have a button container', function() {
    assert.lengthOf(wrapper.find('.ButtonContainer'), 1);
  });

  it('should have user prop', function() {
    expect(wrapper.props().user).to.be.defined;
 });

 it('should have addNewMessage prop', function() {
   expect(wrapper.props().addNewMessage).to.be.defined;
});

});

describe('render',function() {

  const wrapper = shallow(<MessageInput />);

  it('has a character counter', () => {
     assert.lengthOf(wrapper.find('CharacterCounter'), 1);
   });

   it('has a submit button', () => {
      assert.lengthOf(wrapper.find('SubmitButton'), 1);
    });

   it('has a clear button', () => {
       assert.lengthOf(wrapper.find('ClearButton'), 1);
   });

   it('should have attributes for className, onclick, value, placeholder, onChange, draftMessage, clearMessage, and handleNewMessage', function() {
     expect(wrapper.props('className')).to.be.defined;
     expect(wrapper.props('onClick')).to.be.defined;
     expect(wrapper.props('value')).to.be.defined;
     expect(wrapper.props('placeholder')).to.be.defined;
     expect(wrapper.props('onChange')).to.be.defined;
     expect(wrapper.props('draftMessage')).to.be.defined;
     expect(wrapper.props('handleNewMessage')).to.be.defined;
     expect(wrapper.props('clearMessage')).to.be.defined;
   });

});

describe('Check for default state', () => {
   const wrapper = shallow(<MessageInput />);

   it('should have a default messages array that is empty', function() {
     expect(wrapper.state().draftMessage).to.equal('');
   });

 });
