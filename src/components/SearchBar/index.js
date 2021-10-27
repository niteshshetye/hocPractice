import React from 'react'
import './searchbar.css'
const SearchBar = (props) => {
    
    return (
        <div className='searchbar'>
            <input type='text' onChange={(e) => props.handleChange(e)} placeholder='Search here...!'/>
        </div>
    )
}

export default SearchBar;
