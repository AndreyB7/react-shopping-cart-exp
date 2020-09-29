import React from 'react';

const initialState = { 
    counter: {
        value: 0
    }
}

export const CounterContext = React.createContext();

//console.log(CounterContext);


const CounterContextProvider = ({ children }) => {

    const [state, dispatch] = React.useState(initialState)

    const increase = () => {
        dispatch( () => {
            state.counter.value++
            return {
                counter: state.counter
            }
        })
    }
    const decrease = () => {
        dispatch( () => {
            state.counter.value--
            return {
                counter: state.counter
            }
        })
    }

    const contextValues = {
        counter: {
        decrease,
        increase,
        ...state.counter
        }
    }

    return (
        <CounterContext.Provider value={contextValues}>
            { children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider;