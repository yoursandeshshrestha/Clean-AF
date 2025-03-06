import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Image } from '../../domain/entity/Image';

interface HomeState {
  image: Image | null;
  loading: boolean;
  error: string | null;
  isDialogOpen: boolean;  // Add this state
}

const initialState: HomeState = {
  image: null,
  loading: false,
  error: null,
  isDialogOpen: false,  // Initialize to false
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    fetchImageStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchImageSuccess: (state, action: PayloadAction<Image>) => {
      state.image = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchImageFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    openImageDialog: (state) => {
      state.isDialogOpen = true;
    },
    closeImageDialog: (state) => {
      state.isDialogOpen = false;
    }
  },
});

export const { 
  fetchImageStart, 
  fetchImageSuccess, 
  fetchImageFailure, 
  openImageDialog, 
  closeImageDialog 
} = homeSlice.actions;

export default homeSlice.reducer;