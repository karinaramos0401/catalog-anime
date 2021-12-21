import React from 'react'

import Lupa from '../../images/lupa.png'
// import Icon from '../../images/2-2-anime-png-pic.png'

import './Search.scss'

const Search = ({type = 'search', placeholder}) => (
  <div className='kkk'>
     {/* <img className="icon" src={Icon} alt="icon" /> */}
      <h1 className="welcome">, fulano</h1>
      <p className='subtitle'>Let's watch together</p>
      <img className="lupa" src={Lupa} alt="lupa" />
      <input className='pesquisa' type={type}
      placeholder={placeholder} />     
    </div>    
)


export default Search
