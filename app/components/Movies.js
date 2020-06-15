import React from 'react';
import { getMovies } from '../utils/api'

export default class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            repos: {}
        }
    }


    componentDidMount() {
        const api_key = '5623f69e33ca66e95505afa97a7d797d'

        const endpoint = window.encodeURI('https://api.themoviedb.org/3/discover/movie?api_key=' + api_key)
        fetch(endpoint)
            .then((response) =>  response.json())
            .then((repos) => this.setState({
                repos
            }))
        console.log(this.state.repos)
    }

    render(){
        const { repos } = this.state
        return (
                <React.Fragment>
                    {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
                </React.Fragment>

        )
    }
}