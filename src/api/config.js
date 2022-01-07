const connect = (query, variables) => {
  const url = 'https://graphql.anilist.co',
      options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify({
              query,
              variables
          })
      };
  
  return fetch(url, options)
    .then((response) => response.json())
                 

}

export default connect
