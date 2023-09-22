/** @format */
import noImage from '../assets/BlogTemplate Resources/Image Placeholder/no-image-placeholder-6f3882e0.webp';

//opitmizes downloaded images by inserting a crop size into the image url

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageUrl;
