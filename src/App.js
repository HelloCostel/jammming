import React, { useState } from 'react';
import styles from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import PlayList from './components/PlayList/PlayList';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = async (term) => {
    try {
      const response = await fetch('/tracks.json');
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching datas:', error);
    }
  }

  const addTrack = (trackId) => {
    if (playlistTracks.some(element => element.id === trackId)) {
      return;
    } else {
      const track = searchResults.find(track => track.id === trackId);
      setPlaylistTracks([...playlistTracks  , track]);
    }
  }

  return (
    <div id='app'>
      <button onClick={() => console.log(playlistTracks)}></button>
      <SearchBar onSearch={search}/>
      <div>
        <SearchResults tracks={searchResults} onAdd={addTrack}/>
        <PlayList />
      </div>
    </div>
  )
}

export default App;