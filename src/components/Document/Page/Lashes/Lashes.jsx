import React from 'react';
import styles from '../Nails/Manicure.module.css';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://sun9-69.userapi.com/c855624/v855624371/1f50c9/wTdEzCfAEhY.jpg',
    thumbnail: 'https://sun9-69.userapi.com/c855624/v855624371/1f50c9/wTdEzCfAEhY.jpg',
  },
  {
    original: 'https://sun9-20.userapi.com/c204528/v204528371/74f71/Ml9qg8SEKg4.jpg',
    thumbnail: 'https://sun9-20.userapi.com/c204528/v204528371/74f71/Ml9qg8SEKg4.jpg',
  },
  {
    original: 'https://sun9-67.userapi.com/c858028/v858028371/18563e/ZfNH4C2HDy8.jpg',
    thumbnail: 'https://sun9-67.userapi.com/c858028/v858028371/18563e/ZfNH4C2HDy8.jpg',
  },
  {
    original: 'https://sun9-56.userapi.com/c206524/v206524371/74c2f/a-0ZksY9K3E.jpg',
    thumbnail: 'https://sun9-56.userapi.com/c206524/v206524371/74c2f/a-0ZksY9K3E.jpg',
  },
  {
    original: 'https://sun9-29.userapi.com/c206516/v206516371/741d1/DEuBHbl-Nkg.jpg',
    thumbnail: 'https://sun9-29.userapi.com/c206516/v206516371/741d1/DEuBHbl-Nkg.jpg',
  },
];

function Lashes(props) {
  return (
      <div className={styles.box}>
        <ImageGallery items={images}/>
      </div>
  );
}

export default Lashes;
