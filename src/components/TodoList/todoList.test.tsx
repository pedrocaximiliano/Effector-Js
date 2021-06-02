import { shallow } from 'enzyme';
import React from 'react';
import TodoList from './todoList';
import { useStore } from 'effector-react';

jest.mock('effector-react');

describe('App', () => {
  let wrapperDefault: any;
  const todo = [{
    id: 1,
    text: 'cama'
  }]

  beforeEach(() => {
    (useStore as jest.Mock).mockReturnValueOnce({ todos: todo })
    wrapperDefault = shallow(<TodoList />);
  })
  it('should render a TodoAdd', () => {
    wrapperDefault.find('button').simulate('click')
    expect(wrapperDefault.find('input').props().value).toBe('cama')
  });
})