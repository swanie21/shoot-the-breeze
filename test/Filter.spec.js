import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import Filter from '../lib/components/Filter';

describe('filter component',function() {

  const wrapper = shallow(<Filter/>);

  it('should be rendered into a section container', function() {
    expect(wrapper.type(), 'section');
  });

  it('should have an input field', function() {
    expect(wrapper.find('.FilterInput')).to.have.length(1);
  });

  it('should have filterText prop', function() {
    expect(wrapper.props().filterText).to.be.defined;
 });

  it('should have updateFilter prop', function() {
    expect(wrapper.props().updateFilter).to.be.defined;
  });

});
