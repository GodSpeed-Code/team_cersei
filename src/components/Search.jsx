import React, {useState} from 'react'
import bg from '../images/logo.png';

function Search() {
    const [state, setstate] = useState('');

    const updateBlock = (event) => {
        setstate(event.target.value);
        console.log(event.target.value);
    }
    return (
        <div className='search-field'>
            <h1 
            className='heading'>
                {state === '' ? <img src={bg} alt="side-hustle's logo "/> : state}
                </h1>
            <input type='search' placeholder='Search' maxLength='30' onChange={updateBlock} className='input-field'/>
        </div>
    );
}

export default Search;