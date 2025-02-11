import React, { useState } from 'react';
import styles from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import PlayList from './components/PlayList/PlayList';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  //Fetch data from the server
  //SOLVE BUG: FETCHING NEW DATAS FROM SERVER, ENSURE ADDED SONGS AREN'T DISPLAYED 
  const search = async (term) => {
    try {
      const response = await fetch('/tracks.json');
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching datas:', error);
    }
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

  return (
    <div id='app'>
      <button onClick={() => console.log(playlist, searchResults)}></button>  {/*Debug*/}
      <SearchBar onSearch={search}/>
      <div>
        <SearchResults tracks={searchResults} onAdd={addTrack}/>
        <PlayList tracks={playlist} onRemove={removeTrack}/>
      </div>
    </div>
  )
}

export default App;