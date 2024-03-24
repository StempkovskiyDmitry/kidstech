import { ICourse } from 'models';

import { api } from '../../api';

const eventApi = api.injectEndpoints({
  endpoints: build => ({
    getCourses: build.query<ICourse[], void>({
      query: () => ({
        url: 'docs/courses.json',
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetCoursesQuery } = eventApi;
