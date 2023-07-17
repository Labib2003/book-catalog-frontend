import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import CustomButton from "../components/shared/CustomButton";
import {
  useDeleteBookMutation,
  useMarkAsReadMutation,
} from "../redux/features/book/bookApi";
import { toast } from "react-toastify";

export default function BookDetails() {
  const { id } = useParams();
  const { books } = useAppSelector((state) => state.book);
  const { userId } = useAppSelector((state) => state.auth);

  const book = books.find((book) => book.id === id);

  const [deleteBook] = useDeleteBookMutation();
  const [markAsRead] = useMarkAsReadMutation();
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-orange-500 mb-1 capitalize">
          {book?.title}
        </h1>
        <div className="flex gap-3 items-center">
          {book?.readers.find((reader) => reader.id === userId) ? (
            "Marked as read"
          ) : (
            <button
              className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                const call = (async () => {
                  const res = await markAsRead({
                    id: id as string,
                    userId: userId,
                  });
                  if (res.data.message) {
                    toast.success(res.data.message);
                  }
                })();
              }}
            >
              Mark As Read
            </button>
          )}
          {book?.author.id === userId && (
            <>
              <button
                className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  const call = (async () => {
                    const res = await deleteBook(id);
                    if (res.data.message) {
                      toast.success(res.data.message);
                      navigate("/");
                    }
                  })();
                }}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
      <h3 className="text-xl text-slate-800 mb-5">
        A <span>{book?.genre}</span> book by{" "}
        <span className="font-semibold capitalize">{book?.author.name}</span>
      </h3>
      Reviews:
      {book?.reviews.map((review, index) => {
        return (
          <p key={index} className="capitalize font-semibold">
            "{review.text}"
            <br />
            <span className="font-normal">
              &nbsp; &nbsp; &nbsp; &nbsp; - {review.by.name}
            </span>
          </p>
        );
      })}
    </div>
  );
}
