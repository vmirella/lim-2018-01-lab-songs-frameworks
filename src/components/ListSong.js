import React from 'react';

const ListSong = (props) => {
  return (
    <ul>
    {props.arraySongs.map((song, i) => {
      return (
        <li key={i}>
          {song.name} 
          <button onClick = {() => props.handleLikes(1, i, props.artistIndex)}><i className = "fas fa-heart"></i></button> 
          <button onClick = {() => props.handleLikes(-1, i, props.artistIndex)}><i className = "fas fa-thumbs-down"></i></button> 
          <span>{song.likes}</span>
        </li>
      )
    })}
    </ul>        
  )
}

export default ListSong;