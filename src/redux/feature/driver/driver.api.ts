import { baseApi } from "@/redux/baseApi";

export const driverApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        onlineDriverStatus: builder.mutation({
            query: (userInfo) => ({
                url: "/drivers/online",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["DRIVER"],
        }),
        offlineDriverStatus: builder.mutation({
            query: (userInfo) => ({
                url: "/drivers/offline",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["DRIVER"],
        }),
        driverEarnings: builder.query({
            query: () => ({
                url: "/drivers/earnings",
                method: "GET",
            }),
            providesTags: ["DRIVER"]
        }),
        driverCompletedRides: builder.query({
            query: () => ({
                url: "/drivers/my-rides",
                method: "GET",
            }),
            providesTags: ["DRIVER"]
        }),

    }),
});

export const { useOnlineDriverStatusMutation, useOfflineDriverStatusMutation, useDriverEarningsQuery, useDriverCompletedRidesQuery } = driverApi;

