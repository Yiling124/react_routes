import React , { Component } from 'react';
import Songs from '../components/Songs';
import {convertAlbum} from '../utils'
import axios from 'axios'

export default class Album extends Component {
  constructor (props) {
    super(props);
    this.state = {
      album : this.props.album,
      currentSong : this.props.currentSong,
      isPlaying : this.props.isPlaying,
      toggleOne : this.props.toggleOne

    }
  }

componentDidMount () {
  const albumId = this.props.routeParams.albumId;
  const selectAlbum = this.props.selectAlbum;
  axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => this.setState({album : convertAlbum(album)}))
}

render(){

  const albumId = this.props.routeParams.albumId;
  const selectAlbum = this.props.selectAlbum;



  return (
    <div className="album">
      <div>
        <h3>{ this.state.album.name }</h3>
        <img src={ this.state.album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={this.state.album.songs}
        currentSong={this.state.currentSong}
        isPlaying={this.state.isPlaying}
        toggleOne={this.state.toggleOne} />
    </div>
  )
}


}


