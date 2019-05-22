import React from 'react';
import './App.scss';
import Header from './Components/Header';
import MemeForm from './Components/MemeForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title : "",
      url : "",
      memes : []
    }
  }

  handleChangeInput(event) {
    const {name, value} = event.target;
    this.setState({
      [name]:value
    });
  }
  handleSubmit(event) {

  }

  render() {
    return (
      <div className="wrapper">
        <div className="container-header">
          <Header title="Dankest Memes" />
        </div>
        <MemeForm onChangeInput={ (event)=>this.handleChangeInput(event) } onSubmit={ (event)=>this.handleSubmit(event) } />
      </div>
    );
  }
}

export default App;
