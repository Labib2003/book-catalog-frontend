import { Link } from "react-router-dom";
import CustomButton from "../components/shared/CustomButton";
import { Book } from "../redux/features/book/bookSlice";
import { useAppSelector } from "../redux/hooks";

export default function Home() {
  const { books } = useAppSelector((state) => state.book);

  return (
    <div>
      <div className="flex justify-around items-center my-10">
        <div>
          <h1 className="text-5xl font-bold text-slate-800 mb-3">
            Massive Library of Books
          </h1>
          <h3 className="text-3xl font-semibold text-slate-500 mb-5">
            Available Completely For&nbsp;
            <span className="text-orange-500">Free!</span>
          </h3>
          <hr className="mb-5" />
          <Link to="/create-new-book">
            <CustomButton>Publish Your Own Book!</CustomButton>
          </Link>
        </div>
        <div className="max-w-md">
          <img
            src="/undraw_book_lover_re_rwjy.svg"
            alt="book lover"
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <hr />
        <h3 className="text-3xl font-semibold text-slate-800 my-3 text-center">
          Featured Books
        </h3>
        <hr className="mb-5" />
        <table className="w-full table-auto mb-5">
          <thead className="text-xl whitespace-nowrap">
            <tr>
              <th className="font-semibold border border-collapse border-teal-800 py-3">
                #
              </th>
              <th className="font-semibold border border-collapse border-teal-800 py-3 w-1/4">
                Title
              </th>
              <th className="font-semibold border border-collapse border-teal-800 py-3 w-1/4">
                Author
              </th>
              <th className="font-semibold border border-collapse border-teal-800 py-3 w-1/4">
                Genre
              </th>
              <th className="font-semibold border border-collapse border-teal-800 py-3">
                Publication Date
              </th>
            </tr>
          </thead>
          <tbody>
            {books.slice(0, 10).map((book: Book) => {
              return (
                <tr key={book.id}>
                  <td className="border border-collapse border-teal-800 p-3">
                    {book.id}
                  </td>
                  <td className="border border-collapse border-teal-800 p-3 capitalize">
                    {book.title}
                  </td>
                  <td className="border border-collapse border-teal-800 p-3 capitalize">
                    {book.author.name}
                  </td>
                  <td className="border border-collapse border-teal-800 p-3 capitalize">
                    {book.genre}
                  </td>
                  <td className="border border-collapse border-teal-800 p-3">
                    {new Date(book.createdAt).toLocaleDateString("en-GB")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
