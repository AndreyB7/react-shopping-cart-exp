import React from 'react';
import { CounterContext } from "../../contexts/CounterContext"
import { useContext } from "react";
import styles from './counter.module.scss';

const CounterValue = () => {

    const state = useContext( CounterContext );
    
    return (
        <div className='counter'>
            <div>{ state.counter.value } - CounterValue</div>
            <button className={ styles.button } onClick={() => state.counter.decrease() }>---</button>
            <button className={styles.button } onClick={() => state.counter.increase() }>+++</button>
        </div>
    )
}
export default CounterValue;