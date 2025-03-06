import { Image } from '../../domain/entity/Image';
import { ImageRepository } from '../../domain/repositories/ImageRepository';
import { ImageDataSource } from '../datasource/ImageDataSource';

export class ImageRepositoryImpl implements ImageRepository {
  constructor(private dataSource: ImageDataSource) {}

  async getRandomImage(): Promise<Image> {
    const rawData = await this.dataSource.fetchRandomImage();
    
    // Map the raw data to our domain entity
    const image = {
      id: rawData.id,
      url: rawData.url,
      title: `Random Image #${rawData.id}`,
      author: rawData.author,
    };
    
    return image;
  }
}