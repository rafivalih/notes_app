import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { useNotes } from "../../Context/contextApi";
import { NotesCard } from "../../components/NotesCard";

export const Archive = () => {
	const { archive } = useNotes();
	return (
		<>
			<Navbar />
			<main className="flex gap-3">
				<Sidebar />

				<div className="flex flex-col w-screen mt-[20px]">
					{archive?.length > 0 && (
						<>
							<h2 className="font-semibold text-lg">Archived Lists</h2>
							<div className="flex flex-wrap gap-4">
								{archive.map(({ id, text, title, isPinned }) => (
									<NotesCard
										key={id}
										id={id}
										text={text}
										title={title}
										isPinned={isPinned}
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
