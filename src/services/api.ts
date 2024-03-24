import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://logiclike.com/';

const api = createApi({
  reducerPath: 'kidstechApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
});

export { api };
