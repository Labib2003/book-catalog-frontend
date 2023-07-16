import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => {
    return {
      getBooks: builder.query({
        query: () => "/books",
      }),
    };
  },
});

export const { useGetBooksQuery } = bookApi;
