import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../utils/context';
import { getData } from '../utils/getData';

export const Product = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [count, setCount] = useState(1);
    const { setQuantity, setCost } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (error === false) {
            return;
        } else {
            navigate('/not-found');
        }

    }, [error, navigate]);

    useEffect(() => {
        getData(id)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
                console.log('error state is: ', error);
            });
    }, [error, id]);

    useEffect(() => {
        if (count < 0) {
            setCount(0);
        }
    }, [count]);

    const addCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const minusCount = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const onAddButton = () => {
        setQuantity((prev) => prev + count);
        setCost((prev) => (prev + (data.price * count)));
        setCount(0);
    }

    return (
        <>
            { loading ? (<div>Loading...</div>) :
                (<div className="wrapper">
                    <h1 className="title">{ data.title }</h1>
                    <img src={ data.images[0] } alt="product" className="img" />
                    <div className="description">Description:
                        <p className='description__text'>{ data.description }</p>
                    </div>
                    <div className="price">Price: { data.price }</div>
                    <div className="add-to-cart">
                        <div className='count'>
                            <button className='count__minus' onClick={ minusCount }>-</button>
                            <span className='count__text'>{ count }</span>
                            <button className='count__add' onClick={ addCount }>+</button>
                        </div>
                        <button className="addButton" onClick={ onAddButton }>Add to cart</button>
                    </div>
                    <div className="totalPrice">Total Price is: { data.price * count }</div>


                </div>)
            }
        </>);
};
