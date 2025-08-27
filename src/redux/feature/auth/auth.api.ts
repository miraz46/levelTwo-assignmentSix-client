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
            invalidatesTags: ["USER"],
        }),
        resetPassword: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/reset-password",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["USER"],
        }),
        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo,
            }),
        }),

    }),
});

export const { useRegisterMutation, useLoginMutation, useResetPasswordMutation, useLogoutMutation } = authApi;

