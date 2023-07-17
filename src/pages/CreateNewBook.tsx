import { ErrorMessage, Field, Form, Formik } from "formik";
import CustomButton from "../components/shared/CustomButton";
import CustomInputField from "../components/shared/CustomInputField";
import CustomSelectField from "../components/shared/CustomSelectField";
import * as Yup from "yup";
import { useAppSelector } from "../redux/hooks";
import { useAddBookMutation } from "../redux/features/book/bookApi";

export default function CreateNewBook() {
  const { userId } = useAppSelector((state) => state.auth);
  const [addNewBook, { isLoading }] = useAddBookMutation();
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-800 mb-5">
        Create New Book
      </h1>
      <Formik
        initialValues={{ title: "", genre: "" }}
        validationSchema={Yup.object().shape({
          title: Yup.string().required("Title is required"),
          genre: Yup.string()
            .required("Genre is required")
            .oneOf(
              ["textbook", "biography", "fiction", "horror"],
              "Invalid Genre"
            ),
        })}
        onSubmit={async (values) => {
          const data = { ...values, author: userId };
          await addNewBook(data);
        }}
        enableReinitialize
      >
        <Form>
          <div className="mb-3">
            <Field
              name="title"
              as={CustomInputField}
              type="text"
              placeholder="Title"
            />
            <ErrorMessage
              name="title"
              component="span"
              className="text-red-500 font-semibold"
            />
          </div>
          <div className="mb-3">
            <Field as={CustomSelectField} name="genre">
              <option value="" disabled>
                Select Genre
              </option>
              <option value="textbook">Textbook</option>
              <option value="biography">Biography</option>
              <option value="fiction">Fiction</option>
              <option value="horror">Horror</option>
            </Field>
            <ErrorMessage
              name="genre"
              component="span"
              className="text-red-500 font-semibold"
            />
          </div>
          <CustomButton type="submit">
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              "Create"
            )}
          </CustomButton>
        </Form>
      </Formik>
    </div>
  );
}
