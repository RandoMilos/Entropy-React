import React from 'react';
import Aside from './Components/Aside';
import Header from './Components/Header';
import './App.css';
import Player from './Components/Player';
import { Route, Routes } from 'react-router-dom';
import Home from 'Components/Home';
import SearchResults from 'Components/SearchResults';
import AlbumInfo from 'Components/AlbumInfo';


function App() {
    return (
        <div className="App">
            <Header/>
            <div className='mainContainer'>
                <Aside/> 
                <div className='mainContentContainer'>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/search-results' element={<SearchResults/>}/>
                        <Route path='/album/:id'element={<AlbumInfo/>}/>
                    </Routes>
                </div>
            </div>
            <Player/>
        </div>
    );
}
export default App;