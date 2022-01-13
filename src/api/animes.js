import connect from "./config";

const query =  `
query ($search: String, $genre: String) {
  AnimeSearch: Page {
    media (search: $search, type: ANIME, genre: $genre) {
      id
      title {
        userPreferred
      }
      coverImage {
        medium
      }
      averageScore 
      genres 
      seasonYear
    }
  }
}
`;

const getAnimes = ({search, genre}) => {
  return connect(query, {search, genre})
  
}

export default getAnimes;
