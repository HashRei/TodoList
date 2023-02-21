import { useContext } from "react";
import { todosContext } from "../../TodosContext";
import "./TodoResults.scss";

export const TodoResults = () => {
  const { todos } = useContext(todosContext);
  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    let count = 0;
    todos.forEach((element) => {
      if (element.checked == true) count++;
    });
    return count;
  };

  return <div className="TodoResults">Done: {calculateChecked()}</div>;
};
