import {
   configureStore,
   createSlice,
   type PayloadAction,
} from '@reduxjs/toolkit';

const timetable = createSlice({
   name: 'timetable',
   initialState: { title: '시간표', subtitle1: '1학년', subtitle2: '2026' },
   reducers: {
      setTitle: (state, action: PayloadAction<string>) => {
         state.title = action.payload;
      },
      setSubtitle1: (state, action: PayloadAction<string>) => {
         state.subtitle1 = action.payload;
      },
      setSubtitle2: (state, action: PayloadAction<string>) => {
         state.subtitle2 = action.payload;
      },
   },
});

export const { setTitle, setSubtitle1, setSubtitle2 } = timetable.actions;
export const store = configureStore({
   reducer: { timetable: timetable.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
