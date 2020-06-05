import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    render() {
        return (
            <div>
                <h3>My Movie DB</h3>
            </div>
        );
    }
}

ReactDOM.render(
        <App />,
  document.getElementById('root')
);

