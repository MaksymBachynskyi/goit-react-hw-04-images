import { ImageGalleryItem } from 'components/imageGalleryitem/imagegalleryItem';
import { ImageList } from './imagegallery.styled';
export const ImageGallery = ({ images, onOpenModal, onClickedImg }) => {
  return (
    <ImageList>
      {images.map(item => {
        return (
          <ImageGalleryItem
            key={item.id}
            webformaturl={item.webformatURL}
            tag={item.tags}
            onOpenModal={onOpenModal}
            largeImage={item.largeImageURL}
            onClickedImg={onClickedImg}
          />
        );
      })}
    </ImageList>
  );
};
