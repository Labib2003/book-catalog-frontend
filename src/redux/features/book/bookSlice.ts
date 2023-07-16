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

export interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    getBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
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
  },
});

export const { getBooks, addBook, deleteBook, editBook } = bookSlice.actions;

export default bookSlice.reducer;
