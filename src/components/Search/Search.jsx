import React from 'react'

import Lupa from '../../images/lupa.png'

import './Search.scss'

const Search = ({type = 'search', placeholder}) => (
    <div className='kkk'>
      <h1 className="welcome">, fulano</h1>
      <p className='subtitle'>Let's watch animes together</p>
      {/* Ao lado do título ficar a fotinho do login da pessoa */}
      <img className="lupa" src={Lupa} alt="lupa" />
      <input className='pesquisa' type={type}
      placeholder={placeholder} />     
    </div>    
)


export default Search
