import React from 'react'
import Carousel from '../../ui/Carousel/Carousel'
import Button from '../../ui/Button/Button'


import './Genres.scss'

const Genres = ({genres, handleFilter}) => {
  return (
    <section>
      <h2 className="subtitle">Categories</h2>
      <Carousel> 
        {
          genres.map((genre) => (
              <li className="category" key={genre}> 
                <Button className='button' variant='dark' onClick={() => handleFilter({genre})}>{genre}</Button>
              </li>
          ))
        }
      </Carousel> 


    </section>
     
    
  )
}








export default Genres
