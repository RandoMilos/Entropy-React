import React from "react";
import songThumb from 'assets/images/player-thum.jpg'
import prevSong from 'assets/icons/skip-back.svg'
import playButton from 'assets/icons/play.svg'
import nextSong from 'assets/icons/skip-forward.svg'
import volumenButton from 'assets/icons/volume-2.svg'

const Player = () => {
    return(
        <div className="player">
            <div className="playerSongInfo">
                <img className="playerThumbnail" src={songThumb} alt="Continental Imagen"></img>
                <div className="playerSongText"> 
                    <p className="songText">Continental</p>
                    <p className="songText">Bratty, Méne, NSQK</p>
                </div>
            </div>
            <div className="playerMainContainer">
                <p className="timer">0:00</p>
                <div className="playerButtons">
                    <button className="clearButton"><img src={prevSong} alt="Cancion anterior"></img></button>
                    <button className="clearButton"><img src={playButton} alt="Reproducir"></img></button>
                    <button className="clearButton"><img src={nextSong} alt="Cancion siguiente"></img></button>
                </div>
                <p className="timer">2:27</p>
            </div>
            <button className="clearButton volumeButton"><img src={volumenButton} alt="Boton de volumen"></img></button>
        </div>
    )
};

export default Player;