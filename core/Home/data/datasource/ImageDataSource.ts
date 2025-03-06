import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { ImageModel } from '../model/ImageModel';

export interface ImageDataSource {
  fetchRandomImage(): Promise<ImageModel>;
}

export class RemoteImageDataSource implements ImageDataSource {
  private width = 200;
  private height = 300;

  constructor() {}

  async fetchRandomImage(): Promise<ImageModel> {
    try {
      // Generate random ID for the image
      const randomId = Math.floor(Math.random() * 1000);
      
      // With Picsum, we don't need to make a JSON request since it directly returns an image
      // Instead, we'll construct the image URL and metadata ourselves
      const imageUrl = `${API_ENDPOINTS.RANDOM_IMAGE}/${this.width}/${this.height}?random=${Date.now()}`;
      
      // Simulate network delay for better visualization of loading state
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create the model manually since picsum.photos doesn't return JSON
      const imageModel: ImageModel = {
        id: randomId.toString(),
        url: imageUrl,
        author: 'Lorem Picsum',
        width: this.width,
        height: this.height
      };
      
      return imageModel;
    } catch (error) {
      throw error;
    }
  }
}