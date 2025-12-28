import React from "react";
import libraryBotton from 'assets/icons/saved.svg'
import homeButton from 'assets/icons/home.svg'
import artistButton from 'assets/icons/artist.svg'
import playlistButton from 'assets/icons/list.svg'
import albumButton from 'assets/icons/albums.svg'
import songsButton from 'assets/icons/songs.svg'
import luxIcon from 'assets/images/lux-icon.png'
import recentButton from 'assets/icons/clock.svg'
import mainPlaylistThumb from 'assets/images/main-playlist.jpg'
import { LibraryContainer, LMenuButton, LMenuContainer, LMenuIcon, LMenuSubIcon, LMenuTitle, PlaylistCotainer } from "./styles";
const Aside = () => {
    return(
        <LMenuContainer>
            <LMenuTitle>Entropy</LMenuTitle>
            <LMenuButton to="/"><LMenuIcon src={homeButton} alt="Boton Inicio"/><p>Inicio</p></LMenuButton>
            <LibraryContainer>
                <LMenuButton to="/"><LMenuSubIcon src={recentButton} alt="Boton Recientes"/><p>Recientes</p></LMenuButton>
                <LMenuButton to="/"><LMenuSubIcon src={songsButton} alt="Boton Guardados"/><p>Canciones Guardadas</p></LMenuButton>
                <LMenuButton to="/"><LMenuSubIcon src={artistButton} alt="Boton Artistas"/><p>Artistas</p></LMenuButton>
                <LMenuButton to="/"><LMenuSubIcon src={albumButton} alt="Boton Albums"/><p>Albums</p></LMenuButton>
            </LibraryContainer>
                <LMenuButton to="/"><LMenuIcon src={libraryBotton} alt="Biblioteca"/><p>Bibioteca</p></LMenuButton>
            <PlaylistCotainer>
                <LMenuButton to="/"><LMenuIcon src={playlistButton} alt="Boton Playlists"/><p>Playlists</p></LMenuButton>
                <LMenuButton to="/"><LMenuSubIcon src={luxIcon} alt="Playlist Hits en Español"/><p>Hits en Español</p></LMenuButton>
                <LMenuButton to="/"><LMenuSubIcon src={mainPlaylistThumb} alt="Playlist Méne: Imperdibles"/><p>Méne: Imperdibles</p></LMenuButton>
            </PlaylistCotainer>
        </LMenuContainer>
    )
};

export default Aside;