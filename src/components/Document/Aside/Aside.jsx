import React from 'react';
import styles from './Aside.module.css';

function Aside(props) {
    return (
        <aside className={styles.aside}>
            <div className={styles.wrapper}>
                <p className={styles.p}>
                    Дорогие девушки предлагаю Вам качественный маникюр на высококачественных материалах. (UNO) Oпыт работы
                    более 4 лет, сертификат, качественная стерилизация инструментов. Гарантия.
                </p>
                <p className={styles.p}>
                    Работаю в салоне. Екатеринбург ул. Восточная, 178.
                </p>
                <div className={styles.priceList}/>
                <p className={styles.p}>
                    Viber & WhatsApp +7-912-049-95-52
                </p>
            </div>
        </aside>
    );
}

export default Aside;
