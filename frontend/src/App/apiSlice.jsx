import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Posts"],
  endpoints: (build) => ({
    register: build.mutation({
      query: (body) => ({
        url: "register",
        method: "POST",
        body,
      }),
    }),
    login: build.mutation({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
    }),
    createTodo: build.mutation({
      query: (body) => ({
        url: "todo",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
    getTodo: build.query({
      query: (username) => ({
        url: `todo/${username}`,
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts", id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),

    updateTodo: build.mutation({
      query: (body) => ({
        url: `todo`,
        method: "PATCH",
        body,
      }),

      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
    deleteTodo: build.mutation({
      query: (id) => ({
        url: `todo/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
  }),
});

export const {
  useCreateTodoMutation,
  useGetTodoQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useLoginMutation,
  useRegisterMutation,
} = authApi;
