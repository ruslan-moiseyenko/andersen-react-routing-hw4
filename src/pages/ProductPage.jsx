import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getData } from '../utils/getData';

export const Product = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});


    useEffect(() => {
        getData(id)
            .then((res) => {
                setLoading(false);
                res.json()
            })
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    console.log(data);

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

                </div>)
            }
        </>);
};
