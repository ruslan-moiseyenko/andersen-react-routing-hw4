// import {useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { CartContext } from '../../utils/context';
import { useContext } from 'react';
import styles from './ProductCard.module.css';

export const ProductCard = ({ data = {} }) => {
    const { title, price, images, id } = data;
    const { setQuantity, setCost } = useContext(CartContext);

    let inactiveStyle = {
        textDecoration: "none",
    };

    const onAddButton = () => {
        setQuantity((prev) => prev + 1);
        setCost((prev) => (prev + price));
    }

    return (
        <div className={ styles.wrapper }>
            <img src={ images } className={ styles.image } alt='product'></img>
            <NavLink to={ `product/${id}` } className={ ({ isActive }) =>
                isActive ? styles.activeStyle : inactiveStyle
            }>
                <div className={ styles.title }>{ title }</div>

            </NavLink>
            <div className={ styles.price }>Price: { price }</div>
            <button className={ styles.addButton } onClick={ onAddButton }>Add to cart</button>
        </div>
    );
};
