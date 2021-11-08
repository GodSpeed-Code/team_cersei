import Counter from './components/Counter';
import Footer from './components/Footer';
import Search from './components/Search';
import React, {useState} from 'react';

import './styles/App.css';

function App() {
    const [Fish, setState] = useState(<Search/>)

    const nav = (char) =>{
        char === 'c' ? setState( <Counter/>)  : char === 's' ? setState(<Search/>) : <p>ERR 404: page not found</p>;
    }
    return (
        <div className='container'>
            <ul>
                <li onClick={nav('s')} >Search App</li>
                <li onClick={nav('c')}>Counter App</li>
            </ul>
            {Fish}
            <Footer/>
        </div>
    );
}

export default App;