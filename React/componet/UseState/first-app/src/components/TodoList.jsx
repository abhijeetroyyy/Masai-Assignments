import React from 'react'

const TodoList = () => {
    const [todos, setTodos] = React.useState([]);
    const [newTodo, setNewTodo] = React.useState("");
    const [newTodoDescription, setNewTodoDescription] = React.useState("");

    const addTodo = () => {
      if (newTodo.trim() !== "") {
        setTodos([
          ...todos,
          {
            id: Date.now(),
            text: newTodo,
            description: newTodoDescription,
            completed: false,
          },
        ]);
        setNewTodo("");
        setNewTodoDescription("");
      }
    };

    const toggleTodo = (id) => {
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        });
      });
    };

    const removeTodo = (id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
      <>
        <h1 style={{ textAlign: "center" }}>Todo App</h1>
        <div
          style={{
            textAlign: "center",
            margin: "10px",
            display: "flex",
            justifyContent: "center",
            gap: "13px",
            alignItem: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            style={{ textAlign: "center" }}
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter Title"
          />
          <input
            style={{ textAlign: "center" }}
            type="text"
            value={newTodoDescription}
            onChange={(e) => setNewTodoDescription(e.target.value)}
            placeholder="Enter Description"
          />
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        
            <th style={{display:"flex", gap:"10px"}}>
                <td style={{marginLeft:"40px"}}>S.no</td>
                <td>Title</td>
                <td style={{marginLeft:"40px"}}>Description</td>
                <td>Action</td>
                <td>Status</td>
                </th>
                <ol>
          {todos.map((todo) => (
            <li key={todo.id}>
                <span style={{ textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</span>
                <span style={{marginLeft:"10px",textDecoration: todo.completed ? "line-through" : "none"}}>{todo.description}</span>
                <button style={{margin:"10px"}} onClick={() => removeTodo(todo.id)}>Delete</button>
                <input
                  type="checkbox" style={{marginRight:"35%"}}
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
              </li>
            ))}
            </ol>
      </>)
}

export default TodoList