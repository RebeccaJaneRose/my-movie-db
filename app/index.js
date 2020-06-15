import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Movies from "./components/Movies";

class App extends React.Component{
    render() {
        return (
            <div>
                <Movies/>
            </div>
        );
    }
}

ReactDOM.render(
        <App />,
  document.getElementById('root')
);

