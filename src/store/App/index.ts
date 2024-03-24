import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ICourse } from 'models';

type InitStateType = {
  tags: string[];
  listCourse: ICourse[];
  activeTag: string;
};

export const allTag = 'Все темы';

const initialState: InitStateType = {
  tags: [],
  listCourse: [],
  activeTag: '',
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTags: (state, action: PayloadAction<ICourse[]>) => {
      const tags = [
        ...new Set([
          allTag,
          ...action.payload.map(course => course.tags).flat(),
        ]),
      ];
      state.activeTag = tags[0];
      state.tags = tags;
    },
    setActiveTag: (state, action: PayloadAction<string>) => {
      state.activeTag = action.payload;
    },
    setFilterCourse: (
      state,
      action: PayloadAction<{ tag: string; courses: ICourse[] }>,
    ) => {
      const { tag, courses } = action.payload;
      state.listCourse = courses.filter(course => course.tags.includes(tag));
    },
  },
});

export const { setTags, setActiveTag, setFilterCourse } = slice.actions;
export default slice.reducer;
