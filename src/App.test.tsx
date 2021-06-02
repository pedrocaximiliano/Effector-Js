import { shallow } from 'enzyme';
import React from 'react';
import { App } from "./App"
import TodoAdd from './components/TodoAdd/todoAdd';
import TodoList from './components/TodoList/todoList';

describe('App', () => {
  let wrapperDefault: any;
  beforeEach(() => {
    wrapperDefault = shallow(<App />);
  })
  it('should render a TodoAdd', () => {
    expect(wrapperDefault.find(TodoAdd)).toHaveLength(1);
  });
  it('should render a TodoList', () => {
    expect(wrapperDefault.find(TodoList)).toHaveLength(1);
  });
  it('should render a button', () => {
    wrapperDefault.find('button').simulate('click')
    expect(wrapperDefault.find('button')).toHaveLength(1);
  });
})