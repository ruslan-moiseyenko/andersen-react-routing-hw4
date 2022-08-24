// import {useEffect } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../utils/context';
import { useContext } from 'react';
import styles from './ProductCard.module.css';

export const ProductCard = ({ data = {} }) => {
    const { title, price, images, id } = data;
    const { setQuantity, setCost } = useContext(CartContext);

    const onAddButton = () => {
        setQuantity((prev) => prev + 1);
        setCost((prev) => (prev + price));
    }

    return (
        <div className={ styles.wrapper }>
            <img src={ images } className={ styles.image } alt='product'></img>
            <Link to={ `product/${id}` }>
                <div className={ styles.title }>{ title }</div>

            </Link>
            <div className={ styles.price }>Price: { price }</div>
            <button className={ styles.addButton } onClick={ onAddButton }>Add to cart</button>
        </div>
    );
};
