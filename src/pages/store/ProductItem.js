import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';

const ProductItem = ({ product }) => {

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return (
        <div className="card rounded">
            <img style={{ display: "block", margin: "0 auto 10px", maxHeight: "200px" }} className="card-img-top rounded-top"
                src={product.img + '?v=' + product.id} alt="" />
            <div className="card-body text-center justify">
                <h5>{product.title}</h5>
                <p>{product.excerpt}</p>
            </div>
            <div className="card-footer">
                <p>{product.pack}</p>
                <h3 className="text-left">{formatNumber(product.price)}</h3>
                <div className="text-right">
                    <Link to="/" className="btn btn-link btn-sm mr-2">Подробнее</Link>

                    {
                        isInCart(product) &&
                        <button
                            onClick={() => increase(product)}
                            className="btn btn-primary btn-sm">Add more</button>
                    }

                    {
                        !isInCart(product) &&
                        <button
                            onClick={() => addProduct(product)}
                            className="btn btn-primary btn-sm">Add to cart</button>
                    }

                </div>
            </div>
        </div>
    );
}

export default ProductItem;