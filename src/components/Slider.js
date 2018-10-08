import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ButtonRow from './ButtonRow';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: '',
      slideIndex: 1
    }
    this.showImage = this.showImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = (increment) => {
    this.showImage(this.state.slideIndex += increment);
  } 

  showImage = (index) => {
    let i;
    let count = this.props.arrayArtists.length;
    if (index > count) {
      this.setState({slideIndex: 1});
      return;
    }    
    if (index < 1) {
      this.setState({slideIndex: count});
      return;
    }
    for (i = 0; i < count; i++) {
      let image = ReactDOM.findDOMNode(this.refs['image-' + i]);
      image.style.display = 'none';  
    }
    ReactDOM.findDOMNode(this.refs['image-' + (this.state.slideIndex - 1)]).style.display = 'block';
  }

  componentDidUpdate() {
    if (this.props.arrayArtists.length) {
      this.showImage(this.state.slideIndex);
    }
  }

  render() {
    if (this.props.arrayArtists.length) {
      return (
        <div>          
          <div>
            <ButtonRow orientation = "left" onIndexChange = {this.handleChange}></ButtonRow>
            {this.props.arrayArtists.map((artist, i) => {
              return <img src = {artist.image} key = {i} ref = {'image-' + i} className= "slider-item"/>
            })}
            <ButtonRow orientation = "rigth" onIndexChange = {this.handleChange}></ButtonRow>
          </div>
          <h3>{this.props.arrayArtists[0].name}</h3>          
        </div> 
      )
    }
    else {
      return <p>Loading ...</p>;
    } 
  }
}

export default Slider;