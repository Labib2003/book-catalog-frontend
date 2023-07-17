import { api } from "../../api/apiSlice";

interface BookFilters {
  search?: string;
  genre?: string;
  year?: string;
}
interface AddBookPayload {
  title: string;
  author: string;
  genre: string;
}
interface MarkAsReadPayload {
  id: string;
  userId: string;
}
interface AddReviewPayload {
  id: string;
  by: string;
  text: string;
}

const bookApi = api.injectEndpoints({
  endpoints: (builder) => {
    return {
      getBooks: builder.query({
        query: ({ search, genre, year }: BookFilters) => {
          const queryParams = new URLSearchParams();
          if (search?.length) {
            queryParams.append("search", search);
          }
          if (genre?.length) {
            queryParams.append("genre", genre);
          }
          if (year?.length) {
            queryParams.append("year", year);
          }
          console.log(queryParams.toString());
          return "/books?" + queryParams.toString();
        },
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
      deleteBook: builder.mutation({
        query: (id: string) => {
          return {
            url: `/books/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["books"],
      }),
      markAsRead: builder.mutation({
        query: (payload: MarkAsReadPayload) => {
          const { id, ...data } = payload;
          return {
            url: `/books/mark-as-read/${id}`,
            method: "PATCH",
            body: data,
          };
        },
        invalidatesTags: ["books"],
      }),
      addReview: builder.mutation({
        query: (payload: AddReviewPayload) => {
          const { id, ...data } = payload;
          return {
            url: `/books/add-review/${id}`,
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["books"],
      }),
    };
  },
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useMarkAsReadMutation,
  useAddReviewMutation,
} = bookApi;
