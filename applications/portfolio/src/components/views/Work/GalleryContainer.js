import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

const GalleryContainer = ({ photos }) => {
  const [ currentImage, setCurrentImage ] = useState(0);
  const [ viewerIsOpen, setViewerIsOpen ] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return ( 
    <React.Fragment>
      <Gallery photos={photos} onClick={openLightbox}/>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                source: x.src,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </React.Fragment>
   );
}
 
export default GalleryContainer;