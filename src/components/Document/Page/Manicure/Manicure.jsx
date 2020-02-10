import React from 'react';
import styles from './Manicure.module.css';
import sliderCSS from './sliderCSS.css';
import Button from "../../../common/Button";
import ImageGallery from "react-image-gallery";

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
            <h1 className={styles.title}>Примеры работ</h1>
            <ImageGallery items={images}/>
            <div className={styles.b}>
                <Button text='Записаться на приём' href='https://ekb.moiprofi.ru/olgapovarnitsyna1/' color='#FFF345'/>
            </div>
        </div>
    );
}

export default Manicure;
