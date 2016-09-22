import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, assert } from 'chai';
import NavBar from '../lib/components/NavBar';

describe('NavBar component',function() {

  const wrapper = shallow(<NavBar />);

  it('should be rendered into a nav container', function() {
    expect(wrapper.type(), 'nav');
  });

  it('should have a sort buttons container', function() {
    expect(wrapper.find('.SortButtons')).to.have.length(1);
  });

  it('should have messages prop', function() {
    expect(wrapper.props().messages).to.be.defined;
 });

});

describe('render',function() {

  const wrapper = shallow(<NavBar />);

  it('has a filter', () => {
     assert.lengthOf(wrapper.find('Filter'), 1);
   });

   it('has a sort up button', () => {
      assert.lengthOf(wrapper.find('SortUpButton'), 1);
    });

   it('has a sort down button', () => {
       assert.lengthOf(wrapper.find('SortDownButton'), 1);
   });

   it('should have attributes for className, filterText, updateFilter, allMessages, sortUpButton, and sortDownButton', function() {
     expect(wrapper.props('className')).to.be.defined;
     expect(wrapper.props('filterText')).to.be.defined;
     expect(wrapper.props('updateFilter')).to.be.defined;
     expect(wrapper.props('allMessages')).to.be.defined;
     expect(wrapper.props('sortUpButton')).to.be.defined;
     expect(wrapper.props('sortDownButton')).to.be.defined;
   });

});
