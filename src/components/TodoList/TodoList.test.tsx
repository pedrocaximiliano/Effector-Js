import { shallow } from 'enzyme';
import React from 'react';
import TodoList from './TodoList';
import { useStore } from 'effector-react';

jest.mock('effector-react');

describe('TodoList', () => {
  let wrapperDefault: any;
  const todo = [{
    id: 1,
    text: 'Flutter',
  }]

  beforeEach(() => {
    (useStore as jest.Mock).mockReturnValueOnce({ todos: todo })
    wrapperDefault = shallow(<TodoList />);
  })
  it('should render a TodoList', () => {
    wrapperDefault.find('button').simulate('click')
    expect(wrapperDefault.find('input').props().value).toBe('Flutter')
  });

  it('should call onchange props', () => {
    expect(wrapperDefault.find('input').props().onChange()).toBeUndefined()
  });

  it('should render a TodoList when isLoading is true', () => {
    (useStore as jest.Mock).mockReturnValueOnce({ todos: todo }).mockReturnValueOnce({ loading: true })
    wrapperDefault = shallow(<TodoList />);
    expect(wrapperDefault.text()).toBe(' Loading...')
  });

  it('should render a TodoList when todos arrays is void', () => {
    jest.clearAllMocks();
    (useStore as jest.Mock).mockReturnValueOnce({ todos: [] })
    wrapperDefault = shallow(<TodoList />);
    expect(wrapperDefault.text()).toBe('no course')
  });
})
