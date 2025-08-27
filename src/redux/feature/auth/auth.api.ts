import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["DRIVER", "USER"],
        }),
        resetPassword: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/reset-password",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["DRIVER", "USER"],
        }),
        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo,
            }),
        }),
        updateUser: builder.mutation({
            query: (userInfo) => ({
                url: "/user/:id",
                method: "POST",
                data: userInfo,
            }),
        }),
        getMe: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET",
            }),
            providesTags: ["DRIVER", "USER"]
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation, useResetPasswordMutation, useUpdateUserMutation, useLogoutMutation, useGetMeQuery } = authApi;

