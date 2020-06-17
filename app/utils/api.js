const api_key = '5623f69e33ca66e95505afa97a7d797d'

export function getMoviesShowing() {
    const endpoint = window.encodeURI('https://api.themoviedb.org/3/movie/now_playing?api_key=' + api_key)

    return fetch(endpoint)
            .then((response) =>  response.json())
            .then((data) => {
                if(!data) {
                    throw new Error(data.message)
                }
                return data
            })
}