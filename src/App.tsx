import * as React from "react";
import TodoAdd from "./components/todoAdd";
import TodoList from "./components/todoList";


export function App() {
  return (
    <div style={{
      width: ' 50%',
      margin: '60px auto',
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'blanchedalmond',
      fontSize: 50
    }}>
      Item List
      <TodoAdd />
      <TodoList />
      <div style={{
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end',
      }}>
        <button style={{
          marginTop: '50px'
        }}>
          delete All
    </button>
      </div>

    </div>
  );
}
