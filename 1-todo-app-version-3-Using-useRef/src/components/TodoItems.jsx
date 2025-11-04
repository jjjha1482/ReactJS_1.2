import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoItems.module.css';
function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <>
      <div className={styles.itemContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
}

export default TodoItems;
