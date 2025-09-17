// import { v4 as uuid } from "uuid";

// export const notesReducer = (state, { type, payload }) => {
// 	switch (type) {
// 		case "TITLE":
// 			return { ...state, title: payload };

// 		case "TEXT":
// 			return { ...state, text: payload };

// 		case "ADD_NOTES":
// 			const newNote = {
// 				id: uuid(),
// 				title: state.title,
// 				text: state.text,
// 				isPinned: false,
// 			};

// 			if (payload?.isImportant) {
// 				const exists = state.importantNotes.some(
// 					(note) => note.title.toUpperCase() === state.title.toUpperCase()
// 				);
// 				if (exists) {
// 					alert("Same Title Name Cannot Acceptable");
// 					return state;
// 				}
// 				return {
// 					...state,
// 					importantNotes: [...state.importantNotes, newNote],
// 					title: "",
// 					text: "",
// 				};
// 			} else {
// 				const exists = state.homeNotes.some(
// 					(note) => note.title.toUpperCase() === state.title.toUpperCase()
// 				);
// 				if (exists) {
// 					alert("Same Title Name Cannot Acceptable");
// 					return state;
// 				}
// 				return {
// 					...state,
// 					homeNotes: [...state.homeNotes, newNote],
// 					title: "",
// 					text: "",
// 				};
// 			}

// 		case "PIN":
// 			return {
// 				...state,
// 				homeNotes: state.homeNotes.map((note) =>
// 					note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
// 				),
// 				importantNotes: state.importantNotes.map((note) =>
// 					note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
// 				),
// 			};

// 		case "ADD_ARCHIVE":
// 			const noteToArchive =
// 				state.homeNotes.find((note) => note.id === payload.id) ||
// 				state.importantNotes.find((note) => note.id === payload.id);

// 			return {
// 				...state,
// 				homeNotes: state.homeNotes.filter((note) => note.id !== payload.id),
// 				importantNotes: state.importantNotes.filter(
// 					(note) => note.id !== payload.id
// 				),
// 				archive: [...state.archive, noteToArchive],
// 			};

// 		case "REMOVE_ARCHIVE":
// 			const noteToRestore = state.archive.find(
// 				(note) => note.id === payload.id
// 			);
// 			if (!noteToRestore) return state;

// 			return {
// 				...state,
// 				homeNotes: noteToRestore.isImportant
// 					? state.homeNotes
// 					: [...state.homeNotes, noteToRestore],
// 				importantNotes: noteToRestore.isImportant
// 					? [...state.importantNotes, noteToRestore]
// 					: state.importantNotes,
// 				archive: state.archive.filter((note) => note.id !== payload.id),
// 			};
// 		case "DELETE_BIN":
// 			return {
// 				...state,
// 				bin: [...state.bin, payload], // payload is the note being deleted
// 				homeNotes: state.homeNotes.filter((note) => note.id !== payload.id),
// 				importantNotes: state.importantNotes.filter(
// 					(note) => note.id !== payload.id
// 				),
// 				archive: state.archive.filter((note) => note.id !== payload.id),
// 			};
// 		case "MOVE_TO_BIN":
// 			return {
// 				...state,
// 				bin: [...state.bin, { ...payload }], // add note to bin
// 				homeNotes: state.homeNotes.filter((note) => note.id !== payload.id),
// 				importantNotes: state.importantNotes.filter(
// 					(note) => note.id !== payload.id
// 				),
// 				archive: state.archive.filter((note) => note.id !== payload.id),
// 			};
// 		case "RESTORE_FROM_BIN": {
// 			if (!payload?.id || !state.bin) return state;
// 			const noteToRestore = state.bin.find((note) => note.id === payload.id);
// 			if (!noteToRestore) return state;

// 			let updatedState = {
// 				...state,
// 				bin: state.bin.filter((note) => note.id !== payload.id),
// 			};

// 			switch (noteToRestore.origin) {
// 				case "home":
// 					updatedState.homeNotes = [...state.homeNotes, noteToRestore];
// 					break;
// 				case "importantNotes":
// 					updatedState.importantNotes = [
// 						...state.importantNotes,
// 						noteToRestore,
// 					];
// 					break;
// 				case "archive":
// 					updatedState.archive = [...state.archive, noteToRestore];
// 					break;
// 				default:
// 					break;
// 			}

// 			return updatedState;
// 		}

// 		default:
// 			return state;
// 	}
// };

import { v4 as uuid } from "uuid";

export const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return { ...state, title: payload };

    case "TEXT":
      return { ...state, text: payload };

    case "ADD_NOTES": {
      const newNote = {
        id: uuid(),
        title: state.title,
        text: state.text,
        isPinned: false,
        isImportant: payload?.isImportant || false,
      };

      if (newNote.isImportant) {
        const exists = state.importantNotes.some(
          (note) => note.title.toUpperCase() === state.title.toUpperCase()
        );
        if (exists) return state;
        return {
          ...state,
          importantNotes: [...state.importantNotes, newNote],
          title: "",
          text: "",
        };
      } else {
        const exists = state.homeNotes.some(
          (note) => note.title.toUpperCase() === state.title.toUpperCase()
        );
        if (exists) return state;
        return {
          ...state,
          homeNotes: [...state.homeNotes, newNote],
          title: "",
          text: "",
        };
      }
    }

    case "PIN":
      return {
        ...state,
        homeNotes: state.homeNotes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
        ),
        importantNotes: state.importantNotes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
        ),
      };

    case "ADD_ARCHIVE": {
      const noteToArchive =
        state.homeNotes.find((note) => note.id === payload.id) ||
        state.importantNotes.find((note) => note.id === payload.id);

      return {
        ...state,
        homeNotes: state.homeNotes.filter((note) => note.id !== payload.id),
        importantNotes: state.importantNotes.filter(
          (note) => note.id !== payload.id
        ),
        archive: [...state.archive, noteToArchive],
      };
    }

    case "REMOVE_ARCHIVE": {
      const noteToRestore = state.archive.find((note) => note.id === payload.id);
      if (!noteToRestore) return state;

      return {
        ...state,
        homeNotes: noteToRestore.isImportant
          ? state.homeNotes
          : [...state.homeNotes, noteToRestore],
        importantNotes: noteToRestore.isImportant
          ? [...state.importantNotes, noteToRestore]
          : state.importantNotes,
        archive: state.archive.filter((note) => note.id !== payload.id),
      };
    }

    case "MOVE_TO_BIN":
    case "DELETE_BIN": {
      const noteToBin = {
        ...payload,
        origin: state.homeNotes.some((n) => n.id === payload.id)
          ? "home"
          : state.importantNotes.some((n) => n.id === payload.id)
          ? "importantNotes"
          : "archive",
      };

      return {
        ...state,
        bin: [...state.bin, noteToBin],
        homeNotes: state.homeNotes.filter((note) => note.id !== payload.id),
        importantNotes: state.importantNotes.filter(
          (note) => note.id !== payload.id
        ),
        archive: state.archive.filter((note) => note.id !== payload.id),
      };
    }

    case "RESTORE_FROM_BIN": {
      if (!payload?.id) return state;

      const noteToRestore = state.bin.find((note) => note.id === payload.id);
      if (!noteToRestore) return state;

      let updatedState = {
        ...state,
        bin: state.bin.filter((note) => note.id !== payload.id),
      };

      if (noteToRestore.origin === "home") {
        updatedState.homeNotes = [...state.homeNotes, noteToRestore];
      } else if (noteToRestore.origin === "importantNotes") {
        updatedState.importantNotes = [...state.importantNotes, noteToRestore];
      } else if (noteToRestore.origin === "archive") {
        updatedState.archive = [...state.archive, noteToRestore];
      }

      return updatedState;
    }

    default:
      return state;
  }
};
