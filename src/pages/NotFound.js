import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const NotFound = () => {
    
    const center = {
        textAlign: 'center'
    }

    return ( 
        <Layout>
            <div style={center}>
                <h1>404</h1>
                <p>This is the 404 Page.</p>
                <Link to="/" className="btn btn-link btn-sm mr-2">На Главную</Link>
            </div>
        </Layout>
     );
}
 
export default NotFound;