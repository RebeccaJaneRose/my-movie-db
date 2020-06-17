import React from 'react';
import { getMovies } from '../utils/api'

function CardView( { repos }) {
    console.log(repos.results)
    return (

        <ul>
        {repos.results.map((results, index) =>  {
            const { title, release_date } = results
            return (
            <li key={index}>
                <h4>{title}</h4>
                <h5>{release_date}</h5>
            </li>
            )
        })}
        </ul>
    )
}

export default class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: null
        }
    }

    componentDidMount() {
       getMovies()
           .then((repos) => this.setState({
                repos
           }))
        console.log(this.state.repos)
    }

    isLoading() {
        const { repos } = this.state

        return !repos
    }

    render(){
        const { repos } = this.state
        return (
                <React.Fragment>
                    {this.isLoading() && <p>LOADING</p>}

                    {repos && <CardView repos={repos}/>}
                </React.Fragment>

        )
    }
}