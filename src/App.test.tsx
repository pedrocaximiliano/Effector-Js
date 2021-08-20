import { shallow } from 'enzyme';
import React from 'react';
import { App } from "./App"
import TodoAdd from './components/TodoAdd/TodoAdd';
import TodoList from './components/TodoList/TodoList';

describe('App', () => {
  let wrapperDefault: any;
  beforeEach(() => {
    wrapperDefault = shallow(<App />);
  })
  it('should render a TodoAdd', () => {
    expect(wrapperDefault.find(TodoAdd)).toHaveLength(1);
  });

  it('should render a button', () => {
    wrapperDefault.find('button').simulate('click')
    expect(wrapperDefault.find('button')).toHaveLength(1);
  });
})