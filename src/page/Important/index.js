// import { Navbar } from "../../components/Navbar";
// import { NotesCard } from "../../components/NotesCard";
// import { Sidebar } from "../../components/Sidebar";
// import { useNotes } from "../../Context/contextApi";

// export const Important = () => {
// 	const { title, text, noteDispatch, notes, archive } = useNotes();

// 	const onTitileChange = (e) => {
// 		let value = e.target.value;
// 		if (value === "" || value[0] !== " ") {
// 			noteDispatch({
// 				type: "TITLE",
// 				payload: value,
// 			});
// 		}
// 	};

// 	const onTextChange = (e) => {
// 		noteDispatch({
// 			type: "TEXT",
// 			payload: e.target.value,
// 		});
// 	};

// 	const onClikAdd = () => {
// 		noteDispatch({
// 			type: "ADD_NOTES",
// 		});
// 	};

// 	console.log(archive);

// 	const pinnedNotes = notes?.filter(({ isPinned }) => isPinned);
// 	const unpinnedNotes = notes?.filter(({ isPinned }) => !isPinned);

// 	return (
// 		<>
// 			<Navbar />
// 			<main className="flex gap-3">
// 				<Sidebar />{" "}
// 				<div className="flex flex-col w-screen mt-[20px]">
// 					<div className="flex flex-col w-[450px] ml-3 relative mt-[10px] border border-zinc-500 rounded-md self-center">
// 						<input
// 							placeholder="Enter Title"
// 							onChange={onTitileChange}
// 							className="focus:outline-none border-b-0 rounded-t-md p-1"
// 							value={title}
// 							required
// 						/>
// 						<textarea
// 							placeholder="Enter Text"
// 							cols={1000}
// 							rows={4}
// 							onChange={onTextChange}
// 							className="resize-none w-full focus:outline-none max-w-md border-t-0 rounded-b-md p-1"
// 							value={text}
// 							required
// 						/>
// 						<button
// 							disabled={title.length === 0 || text.length === 0}
// 							className="absolute bottom-0 right-0 bg-lime-600 w-7 h-7 rounded-full text-center"
// 							onClick={onClikAdd}
// 						>
// 							<span className="material-icons">add</span>
// 						</button>
// 					</div>
// 					<div className="mt-[70px]">
// 						<div>
// 							{pinnedNotes?.length > 0 && (
// 								<>
// 									<h2 className="font-semibold text-lg">
// 										Pinned Lists ({pinnedNotes.length})
// 									</h2>
// 									<div className="flex flex-wrap gap-4">
// 										{pinnedNotes.map(({ id, text, title, isPinned }) => (
// 											<NotesCard
// 												key={id}
// 												id={id}
// 												text={text}
// 												title={title}
// 												isPinned={isPinned}
// 											/>
// 										))}
// 									</div>
// 								</>
// 							)}
// 						</div>
// 						<div className="">
// 							{unpinnedNotes?.length > 0 && (
// 								<>
// 									<h2 className="mt-10 font-semibold text-lg">
// 										Important Notes ({unpinnedNotes.length})
// 									</h2>
// 									<div className="flex flex-wrap gap-4">
// 										{unpinnedNotes.map(({ id, text, title, isPinned }) => (
// 											<NotesCard
// 												key={id}
// 												id={id}
// 												text={text}
// 												title={title}
// 												isPinned={isPinned}
// 											/>
// 										))}
// 									</div>
// 								</>
// 							)
//                             }
// 						</div>
// 					</div>
// 				</div>
// 			</main>
// 		</>
// 	);
// };

import { Navbar } from "../../components/Navbar";
import { NotesCard } from "../../components/NotesCard";
import { Sidebar } from "../../components/Sidebar";
import { useNotes } from "../../Context/contextApi";

export const Important = () => {
	const { title, text, noteDispatch, importantNotes } = useNotes();

	const onTitleChange = (e) => {
		let value = e.target.value;
		if (value === "" || value[0] !== " ") {
			noteDispatch({ type: "TITLE", payload: value });
		}
	};

	const onTextChange = (e) => {
		noteDispatch({ type: "TEXT", payload: e.target.value });
	};

	const onClickAdd = () => {
		noteDispatch({ type: "ADD_NOTES", payload: { isImportant: true } });
	};

	const pinnedNotes = importantNotes.filter((note) => note.isPinned);
	const unpinnedNotes = importantNotes.filter((note) => !note.isPinned);

	return (
		<>
			<Navbar />
			<main className="flex gap-3">
				<Sidebar />
				<div className="flex flex-col w-screen mt-[20px]">
					<div className="flex flex-col w-[450px] ml-3 relative mt-[10px] border border-zinc-500 rounded-md self-center">
						<input
							placeholder="Enter Title"
							onChange={onTitleChange}
							className="focus:outline-none border-b-0 rounded-t-md p-1"
							value={title}
							required
						/>
						<textarea
							placeholder="Enter Text"
							cols={1000}
							rows={4}
							onChange={onTextChange}
							className="resize-none w-full focus:outline-none max-w-md border-t-0 rounded-b-md p-1"
							value={text}
							required
						/>
						<button
							disabled={title.length === 0 || text.length === 0}
							className="absolute bottom-0 right-0 bg-lime-600 w-7 h-7 rounded-full text-center"
							onClick={onClickAdd}
						>
							<span className="material-icons">add</span>
						</button>
					</div>

					{pinnedNotes.length > 0 && (
						<>
							<h2 className="font-semibold text-lg">
								Pinned Notes ({pinnedNotes.length})
							</h2>
							<div className="flex flex-wrap gap-4">
								{pinnedNotes.map(({ id, text, title, isPinned }) => (
									<NotesCard
										key={id}
										id={id}
										text={text}
										title={title}
										isPinned={isPinned}
										hidePin={true}
									/>
								))}
							</div>
						</>
					)}

					{unpinnedNotes.length > 0 && (
						<>
							<h2 className="mt-10 font-semibold text-lg">
								Important Notes ({unpinnedNotes.length})
							</h2>
							<div className="flex flex-wrap gap-4">
								{unpinnedNotes.map(({ id, text, title, isPinned }) => (
									<NotesCard
										key={id}
										id={id}
										text={text}
										title={title}
										isPinned={isPinned}
										hidePin={true}
									/>
								))}
							</div>
						</>
					)}
				</div>
			</main>
		</>
	);
};
