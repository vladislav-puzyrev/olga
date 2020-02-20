import React from 'react';
import styles from './Manicure.module.css';
import ImageGallery from 'react-image-gallery';
import './sliderCSS.css';

const images = [
  {
    original: 'https://img.moiprofi.ru/public/uploads/master_gallery/photo/1516334/tsFOm3Kof30SAXQt.jpg',
    thumbnail: 'https://img.moiprofi.ru/public/uploads/master_gallery/photo/1516334/tsFOm3Kof30SAXQt.jpg',
  },
  {
    original: 'https://img.moiprofi.ru/public/uploads/master_gallery/photo/1516337/klXMCy89ak8E2abH.jpg',
    thumbnail: 'https://img.moiprofi.ru/public/uploads/master_gallery/photo/1516337/klXMCy89ak8E2abH.jpg',
  },
  {
    original: 'https://img.moiprofi.ru/public/uploads/master_gallery/photo/1516339/821jQ4NjWQAC74IY.jpg',
    thumbnail: 'https://img.moiprofi.ru/public/uploads/master_gallery/photo/1516339/821jQ4NjWQAC74IY.jpg',
  },
  {
    original: 'https://img.moiprofi.ru/public/uploads/master_gallery/photo/1516342/mOfltqZXoeS9dzA3.jpg',
    thumbnail: 'https://img.moiprofi.ru/public/uploads/master_gallery/photo/1516342/mOfltqZXoeS9dzA3.jpg',
  },
  {
    original: 'https://img.moiprofi.ru/public/uploads/master_gallery/photo/1516346/IAQWKhL79Oio07aB.jpg',
    thumbnail: 'https://img.moiprofi.ru/public/uploads/master_gallery/photo/1516346/IAQWKhL79Oio07aB.jpg',
  },
];

function Manicure(props) {
  return (
      <div className={styles.box}>
        <ImageGallery items={images}/>
      </div>
  );
}

export default Manicure;
