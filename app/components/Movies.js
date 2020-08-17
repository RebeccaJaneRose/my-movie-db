import React from 'react';
import { getMovies } from '../utils/api'

function ContentGrid ({ repos }) {
    return(
         <ul>
            {repos.map((repos, index) => {
                const {original_title} = repos

                return (
                    <li>
                        <h1>{original_title}</h1>
                    </li>
                )
            })}
        </ul>
    )
}

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
                {repos && <ContentGrid repos={repos}/>}
            </React.Fragment>

    )
}
}