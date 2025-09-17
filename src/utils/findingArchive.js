export	const findingArchive = (archive , id) =>{
		return archive.some(note => note.id === id);
	}
