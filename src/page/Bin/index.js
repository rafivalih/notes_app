import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../Context/contextApi";

export const Bin = () => {
  const { bin } = useNotes();

  return (
    <>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className="flex flex-col w-screen mt-[20px] ml-3">
          {bin.length === 0 ? (
            <h2 className="select-none text-gray-500 text-lg">
              Nothing Found in Bin
            </h2>
          ) : (
            <>
              <h2 className="font-semibold text-lg">Bin</h2>
              <div className="flex flex-wrap gap-4 mt-4">
                {bin.map(({ id, title, text, isPinned }) => (
                  <NotesCard
                    key={id}
                    id={id}
                    title={title}
                    text={text}
                    isPinned={isPinned}
                    isInBin={true} // optional flag to handle UI in NotesCard
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
