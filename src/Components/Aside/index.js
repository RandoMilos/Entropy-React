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
import { Link } from "react-router-dom";

const Aside = () => {
    return(
        <aside className="leftMenuContainer">
            <h1 className="lMenuTitle">Entropy</h1>
            <Link className="lMenuButton" to="/"><img className="lMenuIcon" src={homeButton} alt="Boton Inicio"></img><p>Inicio</p></Link>
            <div className="libraryContainer">
                <Link className="lMenuButton" to="/"><img className="lMenuSubIcon" src={recentButton} alt="Boton Recientes"></img><p>Recientes</p></Link>
                <Link className="lMenuButton" to="/"><img className="lMenuSubIcon" src={songsButton} alt="Boton Guardados"></img><p>Canciones Guardadas</p></Link>
                <Link className="lMenuButton" to="/"><img className="lMenuSubIcon" src={artistButton} alt="Boton Artistas"></img><p>Artistas</p></Link>
                <Link className="lMenuButton" to="/"><img className="lMenuSubIcon" src={albumButton} alt="Boton Albums"></img><p>Albums</p></Link>
            </div>
                <Link className="lMenuButton" to="/"><img className="lMenuIcon" src={libraryBotton} alt="Biblioteca"></img><p>Bibioteca</p></Link>
            <div className="playlistContainer">
                <Link className="lMenuButton" to="/"><img className="lMenuIcon" src={playlistButton} alt="Boton Playlists"></img><p>Playlists</p></Link>
                <Link className="lMenuButton" to="/"><img className="lMenuSubIcon" src={luxIcon} alt="Playlist Hits en Español"></img><p>Hits en Español</p></Link>
                <Link className="lMenuButton" to="/"><img className="lMenuSubIcon" src={mainPlaylistThumb} alt="Playlist Méne: Imperdibles"></img><p>Méne: Imperdibles</p></Link>
            </div>
        </aside>
    )
};

export default Aside;