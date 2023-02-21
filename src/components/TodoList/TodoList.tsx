import { Key, useContext } from "react";
import { todosContext } from "../../TodosContext";
import Checkbox from "../Checkbox/Checkbox";
import "./TodoList.scss";

export const TodoList = () => {
  const { todos, setTodos } = useContext(todosContext);

  const handleDelete = (id: any) => {
    // Fix an ability to delete task
    setTodos((todos: any[]) =>
      todos.filter((todos: { id: any }) => todos.id !== id)
    );
  };

  const toggleCheck = (id: any) => {
    // Fix an ability to toggle task
    setTodos((todoListData) => {
      return todoListData.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        } else {
          return item;
        }
      });
    });
  };

  const handleKeyUp = (e: { keyCode: number }, id: any) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="TodoList">
      <span className="TodoList__title">Things to do:</span>
      {todos.length ? (
        <div className="TodoList__content">
          {todos.map(
            (todoItem: {
              id: Key | null | undefined;
              label: any;
              checked: any;
            }) => (
              <Checkbox
                key={todoItem.id}
                label={todoItem.label}
                checked={todoItem.checked}
                onClick={() => toggleCheck(todoItem.id)}
                onKeyUp={(e: any) => handleKeyUp(e, todoItem.id)}
                onDelete={() => handleDelete(todoItem.id)}
              />
            )
          )}
        </div>
      ) : (
        <div className="TodoList__noTodos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
