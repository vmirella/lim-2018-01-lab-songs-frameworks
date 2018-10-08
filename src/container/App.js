import React, { Component } from 'react';
import '../App.css';
import Slider from '../components/Slider';
import ListSong from '../components/ListSong';
//import { Form, Row, Col, Button } from 'reactstrap';
/* Here are the details of your new API account.

Application name	lab_songs
API key	7b4175fff31477b727e88d23390fa95b
Shared secret	458e9de1ffb619b9605772feb19d3006
Registered to	vmirella*/

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayArtists: []
    }
  }

  componentDidMount() {
    fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=7b4175fff31477b727e88d23390fa95b&format=json&limit=10')
    .then(response => response.json())
    .then(result => {

      const arrayArtists = [];
      
      const resultArtists = Object.values(result.artists.artist);
      
      resultArtists.map((artist) => {
        arrayArtists.push({
          name: artist.name,
          image: artist.image[4]['#text']
        });
      });
      
      this.setState({arrayArtists: arrayArtists});
    })
    .catch((err) => {
      // algo salió mal...
      console.error("failed", err);
    });

    //http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Kanye+West&api_key=7b4175fff31477b727e88d23390fa95b&format=json
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Slider arrayArtists = {this.state.arrayArtists}/>
          </div>
        </div >
        <div className="row">
          <div className="col-4">
          <ListSong/>
          </div>
        </div >  

      </div>
    );
  }
}

export default App;
