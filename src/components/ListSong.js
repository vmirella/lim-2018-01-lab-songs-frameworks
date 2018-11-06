import React from 'react';

const ListSong = (props) => {
  return (
    <div className = "list-songs">
    {props.arraySongs.map((song, i) => {
      return (
        <div key={i}>
          <div className="divider"></div>
          <div className = "row">
            <div className = "col s6 m9">
              {song.name}
            </div>
            <div className = "col s2 m1">
              <button className = "btn-floating btn-small waves-effect waves-light teal accent-3" onClick = {() => props.handleLikes(1, i, props.artistIndex)}><i className = "material-icons">favorite</i></button>
            </div>
            <div className = "col s2 m1"> 
              <button className = "btn-floating btn-small waves-effect waves-light red" onClick = {() => props.handleLikes(-1, i, props.artistIndex)}><i className = "material-icons">thumb_down</i></button> 
            </div>
            <div className = "col s2 m1">
              <span>{song.likes}</span>
            </div>       
          </div>
        </div>
      )
    })}
    </div>        
  )
}

export default ListSong;