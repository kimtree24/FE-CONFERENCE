import Link from "next/link";

async function getNotes() {
  const response = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await response.json();
  return data?.items as any[];
}

export default async function NotesPages() {
  const notes = await getNotes();
  // console.log(notes);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <Link href="/add">
        <button>추가하기</button>
      </Link>
    </div>
  );
}

function Note({ note }: any) {
  const { id, title } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}
