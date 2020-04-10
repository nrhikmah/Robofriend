import React from 'react';

const SearchBox = ({searchChange}) =>{
    return(
        <div className='pa2'>
            <input className='bg-light-blue ba b--green pa2 ma3' type='search' placeholder='Search your Robofriend'
             onChange={searchChange}
            />
           
        </div>
    )
}

export default SearchBox;