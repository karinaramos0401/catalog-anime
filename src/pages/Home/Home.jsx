import React from 'react'
import Genres from '../../components/Genres/Genres'
import Search from '../../components/Search/Search'
import Animes from '../../components/Animes/Animes'
import getAnimes from '../../api/animes'
import getGenres from '../../api/genres'

const Home = () => {
  

  const [searchTerm, setSearchTerm] = React.useState('')
  const [animes, setAnimes] = React.useState([])
  const [genres, setGenres] = React.useState([]) 
  
  const handleFetchSearch = async (search) => { // pega os dados da API e salva os dados no estado
    const data = await getAnimes({...search}) 
    const newAnimes = data.data.AnimeSearch.media
    setAnimes([
     ...newAnimes
    ])
  }

  const handleFetchGenres = async () => {
    const data = await getGenres()
    const newGenres = data.data.GenreCollection
    setGenres([
      ...newGenres
    ])
  }

  const handleSearchSubmit = async (event) => { //página filtrada quando submete o formulário
    event.preventDefault()
    handleFetchSearch({search: searchTerm})
    
  }


  React.useEffect(() => { // página inicial sem filtrar
   handleFetchSearch()
   handleFetchGenres()
    
  }, [])
    return (
  <>
   <h1 className="title"><span className="title--emph">Hello</span>, usuário!</h1>
    <p className="subtitle">Let's watch together</p>
    <Search
      type="search" 
      placeholder="Search"
      setSearchTerm={setSearchTerm}
      searchTerm={searchTerm}
      handleSearchSubmit={handleSearchSubmit}

    />
    <Genres
      genres={genres}
      handleFilter={handleFetchSearch}
    />
    <Animes
    items={animes}
    />  
  </>
)} 




export default Home

