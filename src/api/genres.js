import connect from "./config";

const query =  `
query { 
  GenreCollection
}
`;

const getGenres = () => {
  return connect(query)
}


export default getGenres


