import React from 'react';
import { getMoviesShowing } from '../utils/api'
import HorizontalScroller from 'react-horizontal-scroll-container';


function Movies({ repos }) {
    console.log(repos.results)
    return (

        <HorizontalScroller>
        {repos.results.map((results, index) =>  {
            const { title, release_date, vote_average, poster_path  } = results
            const imageURl = "https://image.tmdb.org/t/p/w500" + poster_path
            return (
                <div className="card">
                    <img className="poster" src = { imageURl } />
                    <ul>
                        <li className="title">
                            { title }
                        </li>
                        <li>
                            { vote_average }
                        </li>
                        <li>
                            { release_date }
                        </li>
                    </ul>

                </div>
            )
        })}
        </HorizontalScroller>
    )
}

export default class NowShowing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: null
        }
    }

    componentDidMount() {
        getMoviesShowing()
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

                    {repos && <Movies repos={repos}/>}
                </React.Fragment>

        )
    }
}