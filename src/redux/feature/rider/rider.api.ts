import { baseApi } from "@/redux/baseApi";

export const riderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        requestRides: builder.mutation({
            query: (userInfo) => ({
                url: "/rides/request",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["DRIVER", "USER"],
        }),
        cancelRides: builder.mutation({
            query: (userInfo) => ({
                url: "/rides/cancel/:id",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["DRIVER", "USER"]
        }),
        getRideHistory: builder.query({
            query: () => ({
                url: "/rides/history",
                method: "GET",
            }),
            providesTags: ["DRIVER", "USER"]
        }),
    }),
});

export const { useRequestRidesMutation, useCancelRidesMutation, useGetRideHistoryQuery } = riderApi;

