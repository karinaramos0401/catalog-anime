import React from 'react'
import '../../styles/_config.scss'

import Lupa from '../../images/lupa.png'

import '/Search.scss'

const Search = ({type = 'search', placeholder}) => (
    <div>
      <img ClassName="lupa" src={Lupa} alt="lupa" />
      <input ClassName='pesquisa' type={type}
      placeholder={placeholder} />
    </div>    
)


export default Search
