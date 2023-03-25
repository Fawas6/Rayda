import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://run.mocky.io/';

export const DataApi = createApi({
    reducerPath: 'DataApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        method: 'GET',
    }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => `/v3/7f02819f-8254-410a-b8af-ab98572bd26b`,
        }),
    }),
});

export const { useGetDataQuery } = DataApi;