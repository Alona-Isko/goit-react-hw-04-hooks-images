import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import fetchImages from './services/apiServer';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';
import s from './App.module.css';


export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);
    fetchImages(query, page)
      .then(data => {
        setData(data);
        setPage(page);
      })
      .finally(setLoading(false));
  }, [query, page]);
  

  const getSearchValue = query => {
    setQuery(query);
    setPage(1);
    setData([]);
  };


  const onLoadMore = () => {
    setLoading(true);
    fetchImages(query, page)
      .then(el => {
        setData([...data, ...el]);
        setPage(page + 1);
        scrollLoadMore();
      })
      .finally(setLoading(false));
  };


  const scrollLoadMore = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };


  const openModalClick = largeImageURL => {
    setLargeImageURL(largeImageURL);
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
    setLargeImageURL('');
  };


    return (
      <div className={s.App}>
        <Searchbar
          getSearchValue={getSearchValue}
        />
        <ToastContainer
          autoClose={3000}
        />
        <ImageGallery
          data={data}
          onImageClick={openModalClick}
        />
        {loading && <Loader />}
        {data.length > 0 && data.length >= 12 && (
          <Button
            onClick={onLoadMore}
          />
        )}
        {showModal && (
          <Modal
            onClose={toggleModal}
            largeImageURL={largeImageURL}
          />)}
      </div>
    )
};


