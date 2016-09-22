import React from 'react';
import { shallow } from 'enzyme';
import { expect, assert } from 'chai';
import Application from '../lib/components/Application';
import Message from '../lib/components/Message';

describe('application', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'div');
  });
});

describe('Check components', () => {
   const wrapper = shallow(<Application />);

   it('has a nav bar', () => {
      assert.lengthOf(wrapper.find('NavBar'), 1);
    });

   it('has a message area', () => {
      assert.lengthOf(wrapper.find('MessageArea'), 1);
    });

    it('has a user list', () => {
       assert.lengthOf(wrapper.find('UserList'), 1);
     });

    it('has a footer', () => {
        assert.lengthOf(wrapper.find('Footer'), 1);
    });

 });

describe('Check for default state', () => {
   const wrapper = shallow(<Application />);

   it('should have a default messages array that is empty', function() {
     expect(wrapper.state().messages).to.deep.equal([]);
   });

   it('should have a default user that is null', function() {
     expect(wrapper.state().user).to.equal(null);
   });

   it('should have a default reverseSort state that is false', function() {
     expect(wrapper.state().reverseSort).to.equal(false);
   });

   it('should have a default filterText state that is empty', function() {
     expect(wrapper.state().filterText).to.equal('');
   });

 });
