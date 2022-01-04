import React from 'react'
import Carousel from '../../ui/Carousel/Carousel'
import Button from '../../ui/Button/Button'
import Card from '../../ui/Card/Card' 

import './Categories.scss'

const Categories = () => {
  const categories = ['shoujo', 'shounen', 'yaoi', 'action', 'comedy', 'adventure', 'fantasy', 'drama']

const items = [
  {url:"https://ae01.alicdn.com/kf/HTB1ayvsOVXXXXcKXFXXq6xXFXXXy/Tela-personalizada-p-ster-de-parede-pe-a-nica-anime-adesivos-de-parede-da-pe-a.jpg_Q90.jpg_.webp", title:'One Piece', score:'80',seasonYear:'1999', id:'adventure'}, 

  {url:"https://cdn.mangayabu.top/mangas/kimi-ni-todoke/capitulo-112/00.jpg", title:'Kimi ni Todoke', score:'95', seasonYear:'2009', id:'shoujo'}, 

  {url:"https://upload.wikimedia.org/wikipedia/pt/c/c6/Angel_Beats_poster.jpg", title:'Angel Beats', score:'80', seasonYear:'2010', id:'drama'}, 

  {url:"https://m.media-amazon.com/images/I/61k3qe5zitL._AC_SY679_.jpg", title:'Death Note', score:'95', seasonYear:'2006', id:'action'},

  {url:"https://m.media-amazon.com/images/M/MV5BNDFmYjRkZWYtNjgyZS00YTY5LWIyMmQtZTI0OGRiOGM5NGY3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg", title:'Erased', score:'99', seasonYear:'2016', id:'drama'},

  {url:"https://i.pinimg.com/474x/9b/e6/c0/9be6c06abf3eaff3612d3c9a308cbf4d.jpg", title:'Given', score:'70', seasonYear:'2020', id:'yaoi'}

];

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

      <ul>      
        {
            items.map((item) => (
            <li>    
              <Card 
                coverImage={item.url}
                title={item.title}
                score={item.score}
                seasonYear={item.seasonYear}
              />
            </li>  
))

}

      </ul>    
    </section>
  )
}








export default Categories
