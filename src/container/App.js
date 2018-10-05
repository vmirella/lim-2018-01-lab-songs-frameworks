import React, { Component } from 'react';
import '../App.css';
import { Form, Row, Col, Button } from 'reactstrap';
/* Here are the details of your new API account.

Application name	lab_songs
API key	7b4175fff31477b727e88d23390fa95b
Shared secret	458e9de1ffb619b9605772feb19d3006
Registered to	vmirella*/

/*
fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=7b4175fff31477b727e88d23390fa95b&format=json')
//fetch('../data/cohorts.json')
  .then(response => response.json())
  .then(json => {

    const listArtists = json;
    console.log(listArtists);
    
    //llamamos la funcion para que pase como argumentos los datos del json y creen un nodo de opction dentro de un select
    for (let i = 0; i < listArtists.length; i++) {
      //listArtists[i].name
    }
  })
  .catch((err) => {
    // algo salió mal...
    console.error("failed", err);
  });

  //http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Kanye+West&api_key=7b4175fff31477b727e88d23390fa95b&format=json
*/

class App extends Component {
  render() {
    return (
      <Form>
        <Row form>
          <Col md={3}>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default App;
