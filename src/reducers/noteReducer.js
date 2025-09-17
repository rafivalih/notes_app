import { v4 as uuid } from "uuid";

export const notesReducer = (state, { type, payload }) => {
	switch (type) {
		case "TITLE":
			return {
				...state,
				title: payload,
			};
		case "TEXT":
			return {
				...state,
				text: payload,
			};
		case "ADD_NOTES":
			const exists = state.notes.some(
				(note) => note.title.toUpperCase() === state.title.toUpperCase()
			);
			if (exists) {
				return state;
			}
			return {
				...state,
				notes: [
					...state.notes,
					{
						text: state.text,
						title: state.title,
						id: uuid(),
						isPinned: false,
					},
				],
				text: "",
				title: "",
			};
		case "PIN":
			return {
				...state,
				notes: state.notes.map((note) =>
					note.id === payload.id
						? { ...note, isPinned: !note.isPinned }
						: note
				),
			};
		case "ADD_ARCHIVE":
			return {
				...state,
				notes: state.notes.filter((note) => note.id !== payload.id),
				archive: [
					...state.archive,
					state.notes.find(({ id }) => id === payload.id),
				],
			};
			case "REMOVE_ARCHIVE" :
				return{
					...state ,
					notes : [...state.notes , state.archive.find(({ id }) => id === payload.id),] ,
					archive : state.archive.filter((note) => note.id !== payload.id),
				}
		default:
			return state;
	}
};
