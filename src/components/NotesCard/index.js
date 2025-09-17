import { useNotes } from "../../Context/contextApi";
import { findingArchive } from "../../utils/findingArchive";

export const NotesCard = ({
	id,
	text,
	title,
	isPinned,
	isInBin = false,
	hidePin = false,
}) => {
	const { noteDispatch, archive } = useNotes();

	const isInsideArchive = findingArchive(archive, id);

	const onClickPin = () => {
		noteDispatch({ type: "PIN", payload: { id } });
	};

	const onClickArchive = () => {
		if (!isInsideArchive) {
			noteDispatch({ type: "ADD_ARCHIVE", payload: { id } });
		} else {
			noteDispatch({ type: "REMOVE_ARCHIVE", payload: { id } });
		}
	};

	const moveToBin = () => {
		noteDispatch({
			type: "MOVE_TO_BIN",
			payload: { id, title, text, isPinned },
		});
	};

	const restoreFromBin = () => {
		noteDispatch({ type: "RESTORE_FROM_BIN", payload: { id } });
	};

	return (
		<div className="border border-zinc-600 flex flex-wrap p-1 shadow-xl rounded-md w-[350px]">
			{/* Header: Title + Buttons */}
			<div className="flex justify-between p-2 w-full items-start">
				<p className="select-text">{title}</p>
				<div	 className="flex gap-2">
					{!isInsideArchive && !isInBin && !hidePin && (
						<button
							className="cursor-pointer text-gray-700 hover:text-black select-none"
							onClick={onClickPin}
						>
							<span
								className={
									isPinned
										? "material-icons select-none"
										: "material-icons-outlined select-none"
								}
							>
								push_pin
							</span>
						</button>
					)}

					{isInBin && (
						<button
							className="cursor-pointer text-gray-700 hover:text-black select-none"
							onClick={restoreFromBin}
						>
							<span className="material-icons-outlined select-none">
								restore_from_trash
							</span>
						</button>
					)}
				</div>
			</div>

			{/* Body: Text + Archive/Delete Buttons */}
			<div className="flex justify-between p-1 w-full">
				<p className="select-text whitespace-pre-wrap break-words max-w-[260px]">
					{text}
				</p>
				<div className="flex items-start gap-2">
					{!isInBin && (
						<button onClick={onClickArchive}>
							<span
								className={
									isInsideArchive
										? "material-icons select-none"
										: "material-icons-outlined select-none"
								}
							>
								archive
							</span>
						</button>
					)}

					{!isInBin && (
						<button
							onClick={() => moveToBin(isInsideArchive ? "archive" : "home")}
						>
							<span className="material-icons select-none">delete_outline</span>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
