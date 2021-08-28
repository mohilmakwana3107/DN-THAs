import React, { useState } from "react";
import "./app.css";
import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "./reducers";
import { addNote, deleteNote, clickedNote } from "./actions";

function App() {
  const notes = useSelector((state: reducerType) => state.notes);
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1 className="mrgn">To-Do App</h1>
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button
        className="addi"
          onClick={() => {
            dispatch(addNote(input));
            setInput("");
          }}
        >
          Add
        </button>
      </div>
      <div className="notes">
        {notes.length > 0 ? (
          <ul>
            {notes.map((note: string, index: number) => (
              <div><li key={index} >
                  <p className="wdth">{note}</p>
                <button
                className="btn"
                  onClick={() => {
                    dispatch(deleteNote(index));
                    setInput("");
                  }}
                >
                  Delete
                </button>
              </li></div>
            ))}
          </ul>
        ) : (
          <p className="nun">You have no task ToDo... Add ToDo</p>
        )}
      </div>
    </div>
  );
}

export default App;
