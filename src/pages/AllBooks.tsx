export default function AllBooks() {
  return (
    <div>
      <hr />
      <h3 className="text-3xl font-semibold text-slate-800 my-3 text-center">
        All Books
      </h3>
      <hr className="mb-5" />
      <table className="w-full table-fixed">
        <thead className="text-xl">
          <tr>
            <th className="font-semibold border border-collapse border-teal-800 py-3">
              #
            </th>
            <th className="font-semibold border border-collapse border-teal-800 py-3">
              Title
            </th>
            <th className="font-semibold border border-collapse border-teal-800 py-3">
              Author
            </th>
            <th className="font-semibold border border-collapse border-teal-800 py-3">
              Genre
            </th>
            <th className="font-semibold border border-collapse border-teal-800 py-3">
              Publication Date
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
