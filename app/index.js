import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WIPNowShowing from "./components/WIPNowShowing";

class App extends React.Component{
    render() {
        return (
            <div>
                <WIPNowShowing/>
            </div>
        );
    }
}

ReactDOM.render(
        <App />,
  document.getElementById('root')
);

