import CustomButton from "../components/shared/CustomButton";

export default function Home() {
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
          <CustomButton>All Books</CustomButton>
        </div>
        <div className="max-w-xl">
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
        <table className="w-full table-auto">
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
    </div>
  );
}
