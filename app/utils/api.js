
export function getMovies() {
    const endpoint = window.encodeURI('https://api.themoviedb.org/3/discover/movie?api_key=' + api_key)

    return fetch(endpoint)
            .then((response) =>  response.json())
            .then((data) => {

                return data.items
            })
}