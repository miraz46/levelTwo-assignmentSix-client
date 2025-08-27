import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        approveDriver: builder.mutation({
            query: (userInfo) => ({
                url: "/drivers/approve/:id",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["DRIVER", "USER"]
        }),
        suspendDriver: builder.mutation({
            query: (userInfo) => ({
                url: "/drivers/suspend/:id",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["DRIVER", "USER"]
        }),
        getAllRides: builder.query({
            query: (userInfo) => ({
                url: "/rides",
                method: "GET",
                data: userInfo,
            }),
            providesTags: ["RIDES"]
        }),
        allStats: builder.query({
            query: (userInfo) => ({
                url: "/drivers/all-stats",
                method: "GET",
                data: userInfo,
            }),
            providesTags: ["RIDES","DRIVER","USER"]
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
            providesTags: ["DRIVER", "USER"]
        }),
        blockedUser: builder.mutation({
            query: (userInfo) => ({
                url: "/user/block/:id",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["DRIVER", "USER"]
        }),
        unblockedUser: builder.mutation({
            query: (userInfo) => ({
                url: "/user/unblock/:id",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["DRIVER", "USER"]
        }),

    }),
});

export const { useApproveDriverMutation, useSuspendDriverMutation, useGetAllRidesQuery, useGetAllUserQuery, useGetSingleUserQuery, useBlockedUserMutation, useUnblockedUserMutation , useAllStatsQuery} = adminApi;

