import { useContext, createContext , useReducer } from "react";
import {notesReducer} from '../reducers/noteReducer'

const NotesContext = createContext();

const NotesProvider = ({children})=>{
    	const initialState = {
		title: "",
		text: "",
		notes: [],
		archive : [],
	};

	const [{ title, text, notes , archive }, noteDispatch] = useReducer(notesReducer,initialState);
    return (
    <NotesContext.Provider value={{ title, text, notes ,archive ,noteDispatch}}>
        {children }
    </NotesContext.Provider>
    )
}

const useNotes =()=> useContext(NotesContext);

export {NotesProvider , useNotes}