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
       getMovies()
           .then((repos) => this.setState({
               repos: {
                   ...repos
               }
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