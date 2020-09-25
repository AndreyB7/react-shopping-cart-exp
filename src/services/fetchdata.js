import axios from 'axios'
//import { createContext, useState, useEffect } from 'react';

const fetchData = async (url) => {
    // const result = await axios(
    //     'https://cors-anywhere.herokuapp.com/https://thai-open.ru/json-api',
    // );
    const result = await axios(url);

    return result.data
}

export default fetchData