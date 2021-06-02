import { shallow } from 'enzyme';
import React from 'react';
import TodoAdd from './todoAdd';
import { useStore } from 'effector-react';

jest.mock('effector-react');

describe('App', () => {
  let wrapperDefault: any;
  beforeEach(() => {
    (useStore as jest.Mock).mockReturnValueOnce({ newItem: 'cama' })
    wrapperDefault = shallow(<TodoAdd />);
  })
  it('should click in button', () => {
    wrapperDefault.find('button').simulate('click')
    expect(wrapperDefault.find('input').props().value).toBe('cama')
  });
  it('should change input value', () => {
    const changed = { target: { value: 'mesa' } };
    const resp = wrapperDefault.find('input').props().onChange(changed)
    expect(resp).toBe('mesa')
  });
})