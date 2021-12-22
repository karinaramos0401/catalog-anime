import React from 'react'
import Carousel from '../../ui/Carousel/Carousel'
import Button from '../../ui/Button/Button'

const Categories = () => {
  const categories = ['shoujo', 'shounen', 'yaoi']
  return (
    <section>
      <h2>Categories</h2>
      <Carousel> 
        {
          categories.map((category) => (
            <li>{category}
              <Button></Button>
            </li>
          ))
        }
        
      </Carousel>

    </section>

  )
}








export default Categories
