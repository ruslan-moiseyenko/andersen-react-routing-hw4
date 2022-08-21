import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { getData } from '../utils/getData';
import { ProductCard } from '../components/ProductCard/ProductCard';
import styles from './HomePage.module.css';




export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData('').then((res) => res.json()).then(data => setProducts(data));
    }, [])

    // useEffect(() => {console.log(products)},[products])
    return (
        <div>
            <h1>Main home page</h1>
            <ul className={ styles.product_card }>
                { products.map(product => (
                    <li key={ product.id } className={ styles.product__item }>
                        <Link to={ `${product.id}` }>
                            <ProductCard data={ product } />
                        </Link>
                    </li>
                ))
                }
            </ul>
        </div>
    );
};
