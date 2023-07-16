import { api } from "../../api/apiSlice";

interface AddBookPayload {
  title: string;
  author: string;
  genre: string;
}

const bookApi = api.injectEndpoints({
  endpoints: (builder) => {
    return {
      getBooks: builder.query({
        query: () => "/books",
        providesTags: ["books"],
      }),
      addBook: builder.mutation({
        query: (payload: AddBookPayload) => {
          return {
            url: "/books",
            method: "POST",
            body: payload,
          };
        },
        invalidatesTags: ["books"],
      }),
    };
  },
});

export const { useGetBooksQuery, useAddBookMutation } = bookApi;
