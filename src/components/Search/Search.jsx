import React from 'react'

import Lupa from '../../images/lupa.png'

import './Search.scss'

const Search = ({type = 'search', placeholder}) => (
  <div className="search__container">
      <h1 className="title"><span className="title--emph">Hello</span>, usuário!</h1>
      <p className="subtitle">Let's watch together</p>
      <img className="magnifyingGlass" src={Lupa} alt="magnifying glass" />
      <input className="search" type={type}
      placeholder={placeholder} />     
    </div>    
)


export default Search
