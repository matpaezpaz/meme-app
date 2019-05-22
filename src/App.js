import React from 'react';
import './App.scss';
import Header from './Components/Header';
import MemeForm from './Components/MemeForm';
import { localStorageService } from './Utils/localStorageService';
import { MemePersistence } from './Utils/MemePersistence';

const localStorage = new localStorageService("memes");
const persistence = new MemePersistence(localStorage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title : "",
      url : "",
      memes : []
    }
  }

  componentDidMount(){
    const memes = persistence.getMemes();
    this.setState({
      memes: memes
    });
  }

  handleChangeInput(event) {
    const {name, value} = event.target;
    this.setState({
      [name]:value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

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
