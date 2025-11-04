import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import './App.css';
import TodoItems from './components/TodoItems';
import { useState } from 'react';
import WelcomeMsg from './components/WelcomeMsg';
import { TodoItemsContext } from './store/todo-items-store';


function App() {

  let [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currentValue) => [
      ...currentValue,
      { name: itemName, dueDate: itemDueDate }
    ]);
  }
  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }


  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}>
      <center className='todo-container'>
        <AppName />
        <AddTodo />
        <WelcomeMsg />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
