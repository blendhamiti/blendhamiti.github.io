import { TCertificateImage } from './types';

export const getImage: (
  images: TCertificateImage[],
  filename: string
) => TCertificateImage = (images, filename) =>
  images.find((image: TCertificateImage) => image.filename === filename);
