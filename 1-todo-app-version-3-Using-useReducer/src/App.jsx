import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import './App.css';
import TodoItems from './components/TodoItems';
import WelcomeMsg from './components/WelcomeMsg';
import TodoItemsContextProvider from './store/todo-items-store';

function App() {

  return (
    <TodoItemsContextProvider>
      <center className='todo-container'>
        <AppName />
        <AddTodo />
        <WelcomeMsg />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
