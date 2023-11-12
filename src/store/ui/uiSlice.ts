import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDateModalOpen: false,
  activeContentModal: {
    title: '',
    subtitle: '',
    detail: '',
    footer: '',
  } ,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    onOpenDateModal: ( state , { payload } ) => {
        state.isDateModalOpen = true;
        state.activeContentModal =payload;
    },
    onCloseDateModal: ( state ) => {
        state.isDateModalOpen = false;
        state.activeContentModal =  { 
          title: '',
          subtitle: '',
          detail: '',
          footer: '',
        };
        
    },
  },
})

// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;
