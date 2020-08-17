import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NowShowing from "./components/NowShowing";

class App extends React.Component{
    render() {
        return (
            <div>
                <NowShowing/>
            </div>
        );
    }
}

ReactDOM.render(
        <App />,
  document.getElementById('root')
);

