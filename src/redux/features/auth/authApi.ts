import { api } from "../../api/apiSlice";

interface LoginCredentials {
  email: string;
  password: string;
}

const productApi = api.injectEndpoints({
  endpoints: (builder) => {
    return {
      login: builder.mutation({
        query: (credentials: LoginCredentials) => ({
          url: "/auth/login",
          method: "POST",
          body: credentials,
        }),
      }),
    };
  },
});

export const { useLoginMutation } = productApi;
