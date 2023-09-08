import { Searchbar } from './searchbar/searchbar';
import { ImageGallery } from './imageGallery/imagegallery';
import { useEffect, useState } from 'react';
import { fetchGet } from 'fetch';
import { Button } from './button/button';
import { Loader } from './loader';
import { toast } from 'react-hot-toast';
import Modal from 'react-modal';
Modal.setAppElement('#root');
export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [largeImage, setLargeImage] = useState('');
  const [modalIsOpen, setOpenModal] = useState(false);
  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchGetEfect = async () => {
      setLoader(true);
      try {
        const slicedSearch = search.slice(search.indexOf('/') + 1);
        const items = await fetchGet(slicedSearch, page);

        setImages(prevState => [...prevState, ...items.hits]);
        setTotal(items.total);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchGetEfect();
  }, [search, page]);

  function onSearch(searchWord) {
    setSearch(`${Date.now()}/${searchWord}`);
    setImages('');
    setLoader(false);
    setError(false);
    setLargeImage('');
    setPage(1);
    setTotal(0);
  }
  const onLoadMore = () => setPage(prev => prev + 1);
  return (
    <div>
      <Searchbar onSubmit={onSearch} />
      {loader && <Loader />}
      {images.length > 0 && (
        <ImageGallery
          images={images}
          onOpenModal={setOpenModal}
          onClickedImg={setLargeImage}
        />
      )}
      {total / 12 > Math.ceil(page) && (
        <Button onLoadMore={onLoadMore}>Load More</Button>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setOpenModal(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifycontent: 'center',
            alignitems: 'center',
          },
          content: {
            maxWidth: 'calc(100vw - 48px)',
            maxHeight: 'calc(100vh - 24px)',
          },
        }}
      >
        <img src={largeImage} alt="" />
      </Modal>
      {error && toast.error('Something Went Wrong')}
    </div>
  );
};
