import { Image } from '../entity/Image';

export interface ImageRepository {
  getRandomImage(): Promise<Image>;
}