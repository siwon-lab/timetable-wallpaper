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

export const {
   setTitle,
   setSubtitle1,
   setSubtitle2,
   setBgColor,
   setTextColor,
} = timetable.actions;

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

const days = createSlice({
   name: 'days',
   initialState: [
      { day: '일', enabled: false },
      { day: '월', enabled: true },
      { day: '화', enabled: true },
      { day: '수', enabled: true },
      { day: '목', enabled: true },
      { day: '금', enabled: true },
      { day: '토', enabled: false },
   ],
   reducers: {
      setDays: (state, action: PayloadAction<string>) => {
         const day = state.find((d) => d.day === action.payload);
         if (day) day.enabled = !day.enabled;
      },
   },
});

export const { setDays } = days.actions;

export interface Period {
   id: number;
   name: string;
   time: string;
}

const periods = createSlice({
   name: 'periods',
   initialState: [
      { id: 0, name: '1교시', time: '8:40 ~ 9:30' },
      { id: 1, name: '2교시', time: '9:40 ~ 10:30' },
      { id: 2, name: '3교시', time: '10:40 ~ 11:30' },
      { id: 3, name: '4교시', time: '11:40 ~ 12:30' },
      { id: 4, name: '점심시간', time: '12:30 ~ 1:30' },
      { id: 5, name: '5교시', time: '1:30 ~ 2:20' },
      { id: 6, name: '6교시', time: '2:30 ~ 3:20' },
      { id: 7, name: '7교시', time: '3:30 ~ 4:20' },
   ] as Period[],
   reducers: {
      addPeriod: (state) => {
         state.push({ id: Date.now(), name: '새 교시', time: '0:00 ~ 0:00' });
      },
      updatePeriod: (state, action: PayloadAction<Period>) => {
         const idx = state.findIndex((s) => s.id === action.payload.id);
         if (idx !== -1) state[idx] = action.payload;
      },
      removePeriod: (state, action: PayloadAction<number>) => {
         return state.filter((s) => s.id !== action.payload);
      },
   },
});

export const { addPeriod, updatePeriod, removePeriod } = periods.actions;

export const store = configureStore({
   reducer: {
      timetable: timetable.reducer,
      subjects: subjects.reducer,
      days: days.reducer,
      periods: periods.reducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
