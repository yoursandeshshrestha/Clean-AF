import { Image } from '../entity/Image';
import { ImageRepository } from '../repositories/ImageRepository';

export class GetRandomImageUseCase {
  constructor(private imageRepository: ImageRepository) {}

  async execute(): Promise<Image> {
    const image = await this.imageRepository.getRandomImage();
    return image;
  }
}