import React from "react";
import { createContext } from "react";
import { useReducer } from 'react';

export const TodoItemsContext = createContext([]);

function todoItemsReducer(currTodoTems, action) {

   let newTodoItems = currTodoTems;

   if (action.type === "NEW_ITEM") {
      newTodoItems = [
         ...currTodoTems,
         { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
      ];
   }
   else if (action.type === "DELETE_ITEM") {
      newTodoItems = currTodoTems.filter((item) => item.name !== action.payload.itemName);
   }
   return newTodoItems;
};


function TodoItemsContextProvider({ children }) {

   const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

   function addNewItem(itemName, itemDueDate) {
      const newItemAction = {
         type: "NEW_ITEM",
         payload: {
            itemName,
            itemDueDate
         }
      };

      dispatchTodoItems(newItemAction);
   }

   function deleteItem(itemName) {
      const deleteItemAction = {
         type: "DELETE_ITEM",
         payload: {
            itemName: itemName,
         },
      };

      dispatchTodoItems(deleteItemAction);
   }

   return <TodoItemsContext.Provider
      value={{
         todoItems,
         addNewItem,
         deleteItem,
      }}>
      {children}
   </TodoItemsContext.Provider>
}

export default TodoItemsContextProvider;