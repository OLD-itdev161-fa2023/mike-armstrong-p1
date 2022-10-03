import logo from './thor.png';
import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    axios.get('http://localhosnt:5000')
      .then((response) => {
        this.setState({
          data: response.data
        })
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logo} alt="Thor"/>
          Welcome to Thor's Sweet Website!
        </header>
        {this.state.data}
      </div>
    );
  }
}

export default App;