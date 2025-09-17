

import { useContext, createContext, useReducer, useEffect } from "react";
import { notesReducer } from "../reducers/noteReducer";

const NotesContext = createContext();

const initialState = {
  homeNotes: [],
  importantNotes: [],
  archive: [],
  bin: [],
  title: "",
  text: "",
};


const NotesProvider = ({ children }) => {
  // Load from localStorage on first render
  const storedState = JSON.parse(localStorage.getItem("notesState"));

  const [state, noteDispatch] = useReducer(
    notesReducer,
    storedState || initialState
  );

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("notesState", JSON.stringify(state));
  }, [state]);

  return (
    <NotesContext.Provider value={{ ...state, noteDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
