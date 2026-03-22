import {
   configureStore,
   createSlice,
   type PayloadAction,
} from '@reduxjs/toolkit';

const timetable = createSlice({
   name: 'timetable',
   initialState: {
      title: '시간표',
      subtitle1: '1학년',
      subtitle2: '2026',
      bgColor: '#ffffff',
      textColor: '#000000',
   },
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
      setBgColor: (state, action: PayloadAction<string>) => {
         state.bgColor = action.payload;
      },
      setTextColor: (state, action: PayloadAction<string>) => {
         state.textColor = action.payload;
      },
   },
});

export const { setTitle, setSubtitle1, setSubtitle2, setBgColor, setTextColor } =
   timetable.actions;

export interface Subject {
   id: number;
   name: string;
   color: string;
}

const subjects = createSlice({
   name: 'subjects',
   initialState: [
      { id: 1, name: '수학', color: '#ffd93d' },
      { id: 2, name: '영어', color: '#4d96ff' },
   ] as Subject[],
   reducers: {
      addSubject: (state) => {
         state.push({ id: Date.now(), name: '새 과목', color: '#000000' });
      },
      updateSubject: (state, action: PayloadAction<Subject>) => {
         const idx = state.findIndex((s) => s.id === action.payload.id);
         if (idx !== -1) state[idx] = action.payload;
      },
      removeSubject: (state, action: PayloadAction<number>) => {
         return state.filter((s) => s.id !== action.payload);
      },
   },
});

export const { addSubject, updateSubject, removeSubject } = subjects.actions;

export const store = configureStore({
   reducer: { timetable: timetable.reducer, subjects: subjects.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
