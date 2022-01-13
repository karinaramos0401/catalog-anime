import React from 'react'

import Lupa from '../../images/lupa.png'

import './Search.scss'

const Search = ({type = 'search', placeholder, setSearchTerm, searchTerm, handleSearchSubmit}) => (
  <form className="search__container" onSubmit={handleSearchSubmit}> 
      <img className="magnifyingGlass" src={Lupa} alt="magnifying glass" />
      <input className="search" type={type} value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} 
      placeholder={placeholder} />     
    </form>    
)


export default Search
