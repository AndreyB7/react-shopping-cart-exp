import React, { createContext, useState, useEffect } from 'react';
//import { dummyProducts } from '../services/dummy';
import fetchData from '../services/fetchdata';

export const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {

    const dataUrl = 'https://cors-anywhere.herokuapp.com/https://thai-open.ru/products.json'

    const [products, setData] = useState([]);

    useEffect( () => {
        async function Data() {
            const data = await fetchData(dataUrl);
            setData(data)
        }
        Data()
    }, []);

    return (
        <ProductsContext.Provider value={{ products }}>
            { children}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;