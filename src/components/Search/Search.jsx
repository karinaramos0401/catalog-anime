import React from 'react'

import Lupa from '../../images/loupe.png'

import './Search.scss'

const Search = ({type = 'search', placeholder}) => (
    <div>
      <h1>hello, fulano</h1>
      <p>Let's watch animes together</p>
      <img className="lupa" src={Lupa} alt="lupa" />
      <input className='pesquisa' type={type}
      placeholder={placeholder} />     
    </div>    
)


export default Search
