import React from 'react';
import './App.scss';
import Header from './Components/Header';
import MemeForm from './Components/MemeForm';
import { localStorageService } from './Utils/localStorageService';
import { MemePersistence } from './Utils/MemePersistence';
import CardSection from './Containers/CardSection';

const localStorage = new localStorageService("memes");
const persistence = new MemePersistence(localStorage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title : "",
      img : "",
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
    let meme = { title: this.state.title, img: this.state.img };
    persistence.saveMeme(meme);
    this.setState({
      memes: [...this.state.memes,meme],
      title: '',
      img: ''
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container-header">
          <Header title="Dankest Memes" />
        </div>
        <MemeForm data={ ({title:this.state.title,img:this.state.img}) } onChangeInput={ (event)=>this.handleChangeInput(event) } onSubmit={ (event)=>this.handleSubmit(event) } />
        <CardSection data={this.state.memes} />
      </div>
    );
  }
}

export default App;
