import React from 'react'
import Carousel from '../../ui/Carousel/Carousel'
import Button from '../../ui/Button/Button'

import './Categories.scss'

const Categories = () => {
  const categories = ['shoujo', 'shounen', 'yaoi', 'action', 'comedy', 'adventure', 'fantasy']
  return (
    <section>
      <h2 className="subtitle">Categories</h2>
      <Carousel> 
        {
          categories.map((category) => (
              <li className="category"> 
                <Button className='blablabla' variant='dark'>{category}</Button>
              </li>
            
          ))
        }
        
      </Carousel>

    </section>

  )
}








export default Categories
