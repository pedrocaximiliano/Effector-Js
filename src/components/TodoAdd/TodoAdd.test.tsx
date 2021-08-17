import { shallow } from 'enzyme';
import TodoAdd from './TodoAdd';
import React from 'react';
import { useStore } from 'effector-react';

jest.mock('effector-react');

describe('App', () => {
  let wrapperDefault: any;
  window.alert = jest.fn();
  beforeEach(() => {
    (useStore as jest.Mock).mockReturnValueOnce({ newItem: 'pen' })
    wrapperDefault = shallow(<TodoAdd />);
  })
  it('should click in button', () => {
    wrapperDefault.find('button').at(0).simulate('click')
    expect(wrapperDefault.find('input').props().value).toBe('pen')
  });
  it('should click in button onClick to call endPoint', () => {
    wrapperDefault.find('button').at(1).simulate('click')
    expect(wrapperDefault.find('input').props().value).toBe('pen')
  });
  it('should click in button showRules', () => {
    wrapperDefault.find('button').at(2).simulate('click')
    expect(wrapperDefault.find('input').props().value).toBe('pen')
  });
  it('should click in button stopShowRules', async () => {
    wrapperDefault.find('button').at(3).simulate('click')
    expect(wrapperDefault.find('input').props().value).toBe('pen')
  });
  it('should change input value', () => {
    const changed = { target: { value: 'mesa' } };
    const resp = wrapperDefault.find('input').props().onChange(changed)
    expect(resp).toBe('mesa')
  });
})