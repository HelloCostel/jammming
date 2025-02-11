import React, { useState } from 'react';
import styles from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import PlayList from './components/PlayList/PlayList';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const search = async (term) => {
    try {
      const response = await fetch('/tracks.json');
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching datas:', error);
    }
  }

  return (
    <div id='app'>
      <SearchBar onSearch={search}/>
      <div>
        <SearchResults tracks={searchResults} />
        <PlayList />
      </div>
    </div>
  )
}

export default App;