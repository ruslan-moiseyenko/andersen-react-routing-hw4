// import {useEffect } from 'react';
import styles from './ProductCard.module.css';

export const ProductCard = ({ data = {} }) => {
    const { title, price, images } = data;

    return (
        <div className={ styles.wrapper }>
            <img src={ images } className={ styles.image } alt='product'></img>
            <div className={ styles.title }>{ title }</div>
            <div className={ styles.price }>Price: { price }</div>
            <button className={ styles.addButton }>Add to cart</button>
        </div>
    );
};
