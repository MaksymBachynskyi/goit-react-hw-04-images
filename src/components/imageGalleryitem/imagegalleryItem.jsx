import { ImageItem, ImageImg } from './imagegalleryItem.styled';
export const ImageGalleryItem = ({
  webformaturl,
  tag,
  onOpenModal,
  largeImage,
  onClickedImg,
}) => {
  return (
    <ImageItem>
      <ImageImg
        src={webformaturl}
        alt={tag}
        onClick={() => {
          onClickedImg(largeImage);
          onOpenModal(true);
        }}
      />
    </ImageItem>
  );
};
