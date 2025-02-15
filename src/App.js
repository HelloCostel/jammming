import React, { useState } from 'react';
import styles from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import PlayList from './components/PlayList/PlayList';
import Spotify from './util/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

  //Fetch data from the server
  //SOLVE BUG: FETCHING NEW DATAS FROM SERVER, ENSURE ADDED SONGS AREN'T DISPLAYED 
  const search = (term) => {
    Spotify.search(term).then(setSearchResults);
  }

  //Add a track to the playlist state and remove it from the searchResults state
  const addTrack = (trackId) => {
    if (playlist.some(element => element.id === trackId)) {
      return;
    } else {
      const track = searchResults.find(track => track.id === trackId);
      //Add track to Playlist array
      setPlaylist([...playlist  , track]);
      //Remove track from Results array
      setSearchResults((prevResults) => prevResults.filter(track => track.id !== trackId));
    }
  }

  //Remove a track from the playlist state and add it to the searchResults state
  const removeTrack = (trackId) => {
    const track = playlist.find(track => track.id === trackId);
    //Add track to Results array
    setSearchResults([...searchResults, track]);
    //Remove track from Playlist array
    setPlaylist((prevPlaylist) => prevPlaylist.filter(track => track.id !== trackId));
  }

  const updatePlaylistName = (term) => {
    setPlaylistName(term);
    console.log('term is: ', term)
  }

  const saveToSpotify = () => {
    const trackUris = playlist.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylist([]);
    });
  }

  return (
    <div className={styles.app} id='app'>
      <header>
        <h1>Ja<span>mmm</span>ing</h1>
        <SearchBar onSearch={search}/>
      </header>
      <div>
        <SearchResults tracks={searchResults} onAdd={addTrack} />
        <PlayList tracks={playlist} onRemove={removeTrack} onSave={updatePlaylistName} defaultValue={playlistName} saveToSpotify={saveToSpotify} />
      </div>
    </div>
  )
}

export default App;