import { useEffect, useState } from 'react';

import { getData } from '../utils/getData';
import { ProductCard } from '../components/ProductCard/ProductCard';
import styles from './HomePage.module.css';




export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData('').then((res) => res.json()).then(data => setProducts(data));
    }, [])

    return (
        <div>
            <ul className={ styles.product_card }>
                { products.map(product => (
                    <li key={ product.id } className={ styles.product__item }>
                        <ProductCard data={ product } />
                    </li>
                ))
                }
            </ul>
        </div>
    );
};
