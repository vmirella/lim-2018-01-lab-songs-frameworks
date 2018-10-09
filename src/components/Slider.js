import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ButtonRow from './ButtonRow';
import ListSong from './ListSong';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: '',
      slideIndex: 1
    }
    this.showImage = this.showImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLikes = this.handleLikes.bind(this);
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
      let image = ReactDOM.findDOMNode(this.refs[`image-${i}`]);
      image.style.display = 'none';  
    }
    ReactDOM.findDOMNode(this.refs[`image-${(this.state.slideIndex - 1)}`]).style.display = 'block';
  }

  handleLikes = (likes, index, artistIndex) => {
    const arrayArtists = this.props.arrayArtists;

    let currentLikes = arrayArtists[artistIndex].songs[index].likes;
    const likesResult = currentLikes += likes;
    if(likesResult >= 0) {
      arrayArtists[artistIndex].songs[index].likes = likesResult;
      this.setState({arrayArtists});
    }
    
  }

  sortSongs = (arraySongs) => {
    const orderSongs = arraySongs.sort((a, b) => {
      return (b.likes - a.likes)
    });
    return orderSongs;
  }

  componentDidUpdate() {
    if (this.props.arrayArtists.length) {
      this.showImage(this.state.slideIndex);
    }
  }

  render() {
    if (this.props.arrayArtists.length > 0) {
      return (
        <div>          
          <div>
            <ButtonRow orientation = "left" onIndexChange = {this.handleChange}></ButtonRow>
            {this.props.arrayArtists.map((artist, i) => {
              return (
                <div className= "slider-item" ref = {`image-${i}`} key = {i}>
                  <img src = {artist.image} />
                  <h3>{this.props.arrayArtists[i].name}</h3>
                  <div>
                    <ListSong arraySongs = {this.sortSongs(this.props.arrayArtists[i].songs)} handleLikes = {this.handleLikes} artistIndex = {i} />
                  </div >  
                </div>  
              ) 
            })}
            <ButtonRow orientation = "rigth" onIndexChange = {this.handleChange}></ButtonRow>
          </div>
                   
        </div> 
      )
    }
    else {
      return <p>Loading ...</p>;
    } 
  }
}

export default Slider;