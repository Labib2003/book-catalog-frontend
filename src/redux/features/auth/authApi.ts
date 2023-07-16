import { api } from "../../api/apiSlice";

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {}

const productApi = api.injectEndpoints({
  endpoints: (builder) => {
    return {
      login: builder.mutation({
        query: (credentials: LoginCredentials) => {
          return {
            url: "/auth/login",
            method: "POST",
            body: credentials,
          };
        },
      }),
      register: builder.mutation({
        query: (credentials: RegisterCredentials) => {
          return {
            url: "/users/",
            method: "POST",
            body: credentials,
          };
        },
      }),
    };
  },
});

export const { useLoginMutation, useRegisterMutation } = productApi;
