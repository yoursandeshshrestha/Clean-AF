import { Dispatch } from '@reduxjs/toolkit';
import { GetRandomImageUseCase } from '../../domain/usecase/GetRandomImageUseCase';
import { 
  fetchImageFailure, 
  fetchImageStart, 
  fetchImageSuccess, 
  openImageDialog, 
  closeImageDialog 
} from '../state/homeSlice';

export class HomeViewModel {
  constructor(
    private getRandomImageUseCase: GetRandomImageUseCase,
    private dispatch: Dispatch
  ) {}

  async fetchRandomImage(): Promise<void> {
    try {
      this.dispatch(fetchImageStart());
      const image = await this.getRandomImageUseCase.execute();
      this.dispatch(fetchImageSuccess(image));
    } catch (error) {
      this.dispatch(fetchImageFailure('Failed to load image. Please try again.'));
    }
  }

  openDialog(): void {
    this.dispatch(openImageDialog());
  }

  closeDialog(): void {
    this.dispatch(closeImageDialog());
  }
}