import React from 'react';

const Card = ({id,name,email}) =>{
    return(
        // we just can return 1 thing/element
        <div className='bg-light-blue dib br3 pa2 ma2 grow bw2 shadow-1'>
            <img alt='robots' src={`https://robohash.org/${id}`}/>
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;