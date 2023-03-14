"use client";
import React, { useState } from "react";

export default function ToDoApp() {
  const [newTodsAddition, setvalofnewTodsAddition] = useState("");
  const [Todos, setvalue] = useState([
    { Todo: "Cloud to Edge Ppt", completed: false },
    { Todo: "Todo App", completed: true },
    { Todo: "pricing Ui ", completed: true },
  ]);
  const onClickHandler = (para: any) => {
    // it is called from input, so we give him items as a paremeter in INput so here para=items
    console.log("what is in", para); // para my ik object hy woh jis py hum ny ui sy click keya hy like {Todo:"hamza", completed: true}

    //out side return of app return
    //map run on array and return an array AND It returns after all iterations are complete.
    //Remember inside the main return map work for as for loop because simple loops not work in return
    const newTodos = Todos.map((Todos_objects) => {
      console.log("my objects", Todos_objects); //{Todo:"Hello", completed: false}, {Todo:"world", completed: true}, {Todo:"hamza", completed: true}
      if (para.Todo === Todos_objects.Todo) {
        //para my ik object tha woh jis py hum ny ui sy click keya hy, Todos_objects my sary objects hy so woh object jis per hum ny click keya tha jab woh eay to loop my chaly jauo ya consition hy yaha
        Todos_objects.completed = !Todos_objects.completed; // ab jis object py hum nyy click keya hy agar to woh true hy to false kr do or agar false hy to true kr do
      }
      return Todos_objects;
    });
    console.log("return of newTodos", newTodos);
    setvalue(newTodos); //ui my status update kr do
  };
  const addtodo = () => {
    const newTodo = { Todo: newTodsAddition, completed: false };
    const newTodos = [...Todos, newTodo];
    setvalue(newTodos);
    setvalofnewTodsAddition("")
  };
  const deletHandler = (jo_del_karna_woh_todo: any) => {
    console.log("jo_del_karna_woh_todo:any", jo_del_karna_woh_todo);
    const newTodos = Todos.filter((Todos) => {
      if (Todos.Todo == jo_del_karna_woh_todo.Todo) return false;
      return true;
    });
    console.log("old todo", Todos, "new todos", newTodos);
    setvalue(newTodos)
  };
  return (
    <>
      <div></div>
      <input
        placeholder="Add ToDos"
        value={newTodsAddition}
        onChange={(a) => {
          setvalofnewTodsAddition(a.target.value);
        }}
      />
      <button onClick={addtodo}>Add</button>
      <ul>
        {Todos.map((items) => {
          // return <li key={items.Todo}>{items.Todo}, {String(items.completed)}</li>;
          return (
            <li
              style={{
                color: items.completed ? "green" : "Red",
                fontStyle: "oblique",
                listStyle: "none",
              }}
              key={items.Todo}
            >
              <input
                type="checkbox"
                checked={items.completed}
                onClick={() => onClickHandler(items)}
              ></input>
              {items.Todo}
              <button
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "10%",
                  margin: "10px 0",
                }}
                onClick={() => deletHandler(items)}
              >
                del
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
