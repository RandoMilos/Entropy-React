import React from 'react';
import Aside from './Components/Aside';
import Header from './Components/Header';
import Player from './Components/Player';
import { Route, Routes } from 'react-router-dom';
import Home from 'Components/Home';
import SearchResults from 'Components/SearchResults';
import AlbumInfo from 'Components/AlbumInfo';
import { AppContainer, MainContainer, MainContentContainer } from 'AppStyles';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'theme/GlobalStyles';
import theme from 'theme/index.js'



function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <AppContainer>
                <Header/>
                <MainContainer>
                    <Aside/> 
                    <MainContentContainer>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/search-results' element={<SearchResults/>}/>
                            <Route path='/album/:id' element={<AlbumInfo/>}/>
                        </Routes>
                    </MainContentContainer>
                </MainContainer>
                <Player/>
            </AppContainer>
        </ThemeProvider>
    );
}
export default App;