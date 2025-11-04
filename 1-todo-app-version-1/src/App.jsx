import {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import AppName from './AppName';
import AddTodo from './AddTodo';
import AddTodoSub from './AddTodoSub';

function App () {
  const [count, setCount] = useState (0);

  return (
    <>
      <AppName />
      <AddTodo />
      <AddTodoSub />
    </>
  );
}

export default App;
