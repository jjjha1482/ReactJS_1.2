import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoItems.module.css';
import { TodoItemsContext } from '../store/todo-items-store';
import { useContext } from 'react';

function TodoItems() {

  const { todoItems, deleteItem } = useContext(TodoItemsContext);


  return (
    <>
      <div className={styles.itemContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
          />
        ))}
      </div>
    </>
  );
}

export default TodoItems;
