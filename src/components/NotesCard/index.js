import { useNotes } from "../../Context/contextApi";
import { findingArchive } from '../../utils/findingArchive';

export const NotesCard = ({ id, text, title, isPinned }) => {
	const { noteDispatch , archive } = useNotes();

	const onClickPin = (id) => {
		noteDispatch({
			type: "PIN",
			payload: { id },
		});
	};

	const onClickArchive = (id) => {
		!isInsideArchive ? noteDispatch({
			type: "ADD_ARCHIVE",
			payload: { id },
		}) : noteDispatch({
			type : "REMOVE_ARCHIVE",
			payload : { id },
		})
	};



	const isInsideArchive = findingArchive (archive, id );

	return (
		<div
			key={id}
			className="border border-zinc-600 flex flex-wrap p-1 shadow-xl rounded-md w-[300px]"
		>
			<div className="flex justify-between p-2 w-full">
				<p>{title}</p>
				{
					!isInsideArchive ? <button
					className="cursor-pointer"
					onClick={() => onClickPin(id)}
				>
					<span
						className={
							isPinned ? "material-icons" : "material-icons-outlined"}
					>
						push_pin
					</span>
				</button> : <></>
				}

			</div>
			<div className="flex justify-between p-1 w-full">
				<span>{text}</span>
				<div>
					<button>
					<span
						className={ isInsideArchive ?"material-icons":"material-icons-outlined"}
						onClick={() => onClickArchive(id)}
					>
						archive
					</span>
					</button>
					<button>
					<span className="material-icons">
						delete_outline
					</span>
					</button>
				</div>
			</div>
		</div>
	);
};
