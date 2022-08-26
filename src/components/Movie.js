
import React from 'react';

const Movie = (props) => {

  return (
    <article className='movie'>
      <div className='movie_img_container'>
         <img src={props.image} alt={props.tittle} className ='movie-img'/>
      </div>
        <h2 className ='movie-tittle'>{props.tittle}</h2>
      <h3 className ='movie-aurthor'>{props.aurthor}</h3>
      <h4 className ='movie-price'>{props.price}</h4>
    </article>  
  ) 
};

export default Movie;
