import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from '.';


export const store = configureStore({
    reducer: {
       
        //calendar: calendarSlice.reducer,
        ui: uiSlice.reducer
    },
  
});

export type RootState = ReturnType<typeof store.getState>;