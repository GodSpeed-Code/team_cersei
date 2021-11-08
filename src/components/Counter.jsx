import React, {useState} from 'react';
import '../styles/counter.css';


function Counter() {
    let [state, setState] = useState(0);

    const minusFromState = () => {
        state === 0 ? setState(0) : setState(state--);
    }
    const addToState = () => {
        setState(state++);
    }
    return (
        <div className='counter'>
            <h1 
            className='value'
            alt={`counter is at ${state}`}>
                 {state}
            </h1>
            <div>
            <button 
            onClick={minusFromState} 
            className='minus'>
                -
            </button>
            <button 
            onClick={addToState} 
            className='add'>
                +
            </button>
            </div>
        </div>
    );
}

export default Counter;