import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Book {
  id: string;
  title: string;
  author: Author;
  genre: string;
  readers: Array<Reader>;
  reviews: Array<Review>;
  createdAt: Date;
  updatedAt: Date;
}

interface Author {
  id: string;
  name: string;
  email: string;
}

interface Reader {
  id: string;
  name: string;
  email: string;
}

interface Review {
  by: Author;
  text: string;
}

interface BookFilter {
  search: string;
  genre: string;
  year: string;
}

export interface BookState {
  books: Book[];
  bookFilter: BookFilter;
}

const initialState: BookState = {
  books: [],
  bookFilter: {
    search: "",
    genre: "",
    year: "",
  },
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    getBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    editBook: (state, action: PayloadAction<Book>) => {
      state.books = state.books.map((book) => {
        if (book.id === action.payload.id) {
          return action.payload;
        }
        return book;
      });
    },
    setBookFilter: (state, action: PayloadAction<BookFilter>) => {
      state.bookFilter = action.payload;
    },
  },
});

export const { getBooks, setBookFilter } = bookSlice.actions;

export default bookSlice.reducer;
