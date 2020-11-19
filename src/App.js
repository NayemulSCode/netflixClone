import React from 'react';
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './request';
import Row from './Row';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row 
        title = "NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargerRow={true}
      />
      <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title = "Top Ratted" fetchUrl={requests.fetchTopRated}/>
      <Row title = "Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
