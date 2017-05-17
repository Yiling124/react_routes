import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios'
import Songs from '../components/Songs';
import Albums from '../components/Albums'


export default class Artist extends Component{
  constructor (props) {
    super(props);
    this.state = {
      artist: {},
      artistName : '',
      artistAlbums : [],
      artistSongs : [],
      selectedArtist : {}
    }
  }

  componentDidMount () {
    const artistsId = this.props.routeParams.artistId;
    axios.get(`/api/artists/${artistsId}`)
      .then(res => res.data)
      .then(artist =>
         this.setState({selectedArtist : artist}));

    axios.get(`/api/artists/${artistsId}/albums`)
      .then(res => res.data)
      .then((albums) => this.setState({artistAlbums : albums}))

    axios.get(`api/artists/${artistsId}/songs`)
      .then((res) => res.data)
      .then((songs) => this.setState({artistSongs : songs}))
  }

  render(){

    return (
      <div>
    <h3>{this.state.selectedArtist.name}</h3>
    <h3>Albums:</h3>
      {this.state.artistAlbums && this.state.artistAlbums.map((album) => <p>{album.name}</p>)}
    <h3>Songs:</h3>
    <Songs
      songs = {this.state.artistSongs}
      currentSong = {this.props.currentSong}
      isPlaying = {this.props.isPlaying}
      toggleOne = {this.props.toggleOne}
      />

    </div>
    )
  }
}



