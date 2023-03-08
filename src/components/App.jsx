import React, { useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { AppWrap, BtnLoadMore } from './App.styled'
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { getGallery } from '../api/gallery'
import { Loader } from './Loader/Loader' 
import { ErorMessage } from './ErorMessage/ErorMessage'
import { ModalWindow } from './Modal/Modal'

export function App() {
  
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [erorOfSerch, setErorOfSerch] = useState(false);
  const [error, setError] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState('');

  function onHandleSubmit(evt) {
    
    const query = evt.target.name.value.toLowerCase()
  
    evt.preventDefault()
    
    if (query.trim() === '') {
      alert('Введите что-нибудь')
      return
    }

    setQ(query);
    setIsLoad(true);
    setGallery([]);
    setErorOfSerch(false)

    try {
      getGallery(query, page)
        .then(({ data }) => {
          if (data.hits.length === 0) {
            setErorOfSerch(true)
          } setGallery(data.hits)

        }).finally(setIsLoad(false))
    } catch (error) {
      setError(true)
    }
    setPage(st => st + 1)
  
    evt.target.reset()
    console.log();
  }
  function onLoadMoreBtnClick() {
    setIsLoad(true)

    setTimeout(() => {
      try {
        getGallery(q, page)
          .then(({ data }) => setGallery(st => [...st, data.hits]))
          .finally(setIsLoad(false))
      } catch (error) {
        setError(true)
      }
    }, 500);

    setPage(st => st + 1)
  } 
  function onSelect(data) {

    setModalData(data)
    setIsModal(true)
    
  }
  function toggleModal(e) {
    if (e.target === e.currentTarget) {
      setIsModal(st => !st)
    }
    
  }
  function closeModal() {
    setIsModal(st => !st)
  }
return (
    <AppWrap>
      <Searchbar onHandleSubmit={onHandleSubmit} />
      {isModal && <ModalWindow closeModal={closeModal} onModalClick={toggleModal} data={modalData} />}
      {erorOfSerch && <ErorMessage text={'No images found by request '} name={q} />}
      {error && <ErorMessage text={'something went wrong'} />}
      <ImageGallery gallery={gallery} onSelect={onSelect} ></ImageGallery>
      {isLoad
        ? <Loader />
        : gallery.length > 0
        && <BtnLoadMore onClick={onLoadMoreBtnClick} >Load More</BtnLoadMore>}
        
        
    </AppWrap>)
  
}
