import React, {} from 'react';
import Layout from '../../components/Layout';

import CounterContextProvider from "../../contexts/CounterContext"
import CounterValue from "./CounterValue"

const About = () => {
    
    return ( 
        <Layout title="About" description="This is the About page" >
            <div className="text-center mt-5">
                <h1>Context API counter</h1>
                <CounterContextProvider>
                    <CounterValue/>
                </CounterContextProvider>
                <p>This project was built for practice purposes using <strong>Context API</strong> by React.</p>
            </div>
        </Layout>
     );
}
 
export default About;