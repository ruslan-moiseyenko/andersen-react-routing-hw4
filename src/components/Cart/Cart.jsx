import { useContext } from 'react';
import { CartContext } from '../../utils/context';
import styles from './Cart.module.css';

export const Cart = () => {
    const { quantity, cost } = useContext(CartContext);
    return (
        <div className={ styles.cart }>
            <h3 className={ styles.tytle }>The Cart</h3>
            <div className={ styles.info }>Items in the cart: { quantity }</div>
            <div className={ styles.info }>Total cost: { cost }</div>
        </div>
    );
};
