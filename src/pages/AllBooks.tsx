import { Link } from "react-router-dom";
import {
  Book,
  getBooks,
  setBookFilter,
} from "../redux/features/book/bookSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import CustomInputField from "../components/shared/CustomInputField";
import CustomSelectField from "../components/shared/CustomSelectField";
import CustomButton from "../components/shared/CustomButton";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function AllBooks() {
  const { books, bookFilter } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();
  const { data, isSuccess, isError, error, isFetching } = useGetBooksQuery(
    bookFilter,
    { pollingInterval: 30000 }
  );

  useEffect(() => {
    if (isSuccess) {
      dispatch(getBooks(data?.data));
    }
    if (isError) {
      toast.error(error?.message);
    }
  }, [isSuccess, isError, isFetching]);

  return (
    <div>
      <hr />
      <h3 className="text-3xl font-semibold text-slate-800 my-3 text-center">
        All Books
      </h3>
      <hr className="mb-5" />
      <hr />

      <Formik
        initialValues={bookFilter}
        validationSchema={Yup.object().shape({
          search: Yup.string(),
          genre: Yup.string(),
          year: Yup.string(),
        })}
        onSubmit={(values) => {
          dispatch(setBookFilter(values));
        }}
        enableReinitialize
      >
        <Form>
          <div className="flex gap-5 py-3">
            <Field name="search" as={CustomInputField} placeholder="Search" />
            <Field as={CustomSelectField} name="genre">
              <option value="" disabled>
                Select Genre
              </option>
              <option value="textbook">Textbook</option>
              <option value="biography">Biography</option>
              <option value="fiction">Fiction</option>
              <option value="horror">Horror</option>
            </Field>
            <Field as={CustomSelectField} name="year">
              <option value="" disabled>
                Select Year
              </option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </Field>
            <CustomButton type="submit">Apply Filter</CustomButton>
          </div>
        </Form>
      </Formik>
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
          {books.map((book: Book) => {
            return (
              <tr key={book.id}>
                <td className="border border-collapse border-teal-800 p-3">
                  {book.id}
                </td>
                <td className="border border-collapse border-teal-800 p-3 capitalize text-blue-500 underline">
                  <Link to={`/books/${book.id}`}>{book.title}</Link>
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
  );
}
