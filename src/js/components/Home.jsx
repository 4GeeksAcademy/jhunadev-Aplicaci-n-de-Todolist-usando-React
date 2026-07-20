import React, { useState } from "react";


const Home = () => {


  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState([]);

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h1 className="todo-header">Lista Básica</h1>
      
      <div className="todo-card">
        

        <input 
          type="text" 
          className="todo-input"
          placeholder="¿Qué necesitas hacer?"

          value={inputValue}

          onChange={(e) => setInputValue(e.target.value)}

          onKeyDown={(e) => {

            if (e.key === "Enter" && inputValue.trim() !== "") {

              setTodos([...todos, inputValue]);

              setInputValue(""); 
            }
          }}
        />
        
        <ul className="todo-list">
          
          {todos.length === 0 ? (
            <li className="todo-item empty-message">
              No hay tareas 💛, ¡Agrega una!
            </li>
          ) : (

            todos.map((tarea, indice) => (
              <li key={indice} className="todo-item">
                
                <span>{tarea}</span>
                
                <span 
                  className="delete-icon" 
                  onClick={() => {

                    const nuevoArregloFiltrado = todos.filter((t, i) => i !== indice);

                    setTodos(nuevoArregloFiltrado);
                  }}
                >
                  &#10006;
                </span>

              </li>
            ))
          )}
        </ul>
        
        <div className="todo-footer d-flex justify-content-between align-items-center">
          <span>
            Falta{todos.length !== 1 ? "n" : ""} {todos.length} tarea{todos.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;