import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        approveDriver: builder.mutation({
            query: (userInfo) => ({
                url: "/drivers/approve/:id",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["USER"]
        }),
        suspendDriver: builder.mutation({
            query: (userInfo) => ({
                url: "/drivers/suspend/:id",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["USER"]
        }),
        getAllRides: builder.query({
            query: (userInfo) => ({
                url: "/rides",
                method: "GET",
                data: userInfo,
            }),
            providesTags: ["RIDES"]
        }),
        getAllUser: builder.query({
            query: (userInfo) => ({
                url: "/user/all-users",
                method: "GET",
                data: userInfo,
            }),
            providesTags: ["USER"]
        }),
        getSingleUser: builder.query({
            query: (userInfo) => ({
                url: "/user/:id",
                method: "GET",
                data: userInfo,
            }),
            providesTags: ["USER"]
        }),
        blockedUser: builder.mutation({
            query: (userInfo) => ({
                url: "/user/block/:id",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["USER"]
        }),
        unblockedUser: builder.mutation({
            query: (userInfo) => ({
                url: "/user/unblock/:id",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["USER"]
        }),

    }),
});

export const { useApproveDriverMutation, useSuspendDriverMutation, useGetAllRidesQuery, useGetAllUserQuery, useGetSingleUserQuery, useBlockedUserMutation, useUnblockedUserMutation } = adminApi;

