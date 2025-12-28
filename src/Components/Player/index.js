import React from "react";
import songThumb from 'assets/images/player-thum.jpg'
import prevSong from 'assets/icons/skip-back.svg'
import playButton from 'assets/icons/play.svg'
import nextSong from 'assets/icons/skip-forward.svg'
import volumenButton from 'assets/icons/volume-2.svg'
import { PlayerButtons, PlayerContainer, PlayerMainContainer, PlayerSongInfo, PlayerSongText, PlayerThumbnail, PlayerTimer } from "./styles";
import { ClearButton } from "theme/SharedStyles";

const Player = () => {
    return(
        <PlayerContainer>
            <PlayerSongInfo>
                <PlayerThumbnail src={songThumb} alt="Continental Imagen"/>
                <div> 
                    <PlayerSongText>Continental</PlayerSongText>
                    <PlayerSongText className="songText">Bratty, Méne, NSQK</PlayerSongText>
                </div>
            </PlayerSongInfo>
            <PlayerMainContainer>
                <PlayerTimer>0:00</PlayerTimer>
                <PlayerButtons>
                    <ClearButton><img src={prevSong} alt="Cancion anterior"></img></ClearButton>
                    <ClearButton><img src={playButton} alt="Reproducir"></img></ClearButton>
                    <ClearButton><img src={nextSong} alt="Cancion siguiente"></img></ClearButton>
                </PlayerButtons>
                <PlayerTimer>2:27</PlayerTimer>
            </PlayerMainContainer>
            <ClearButton style={{paddingRight: '1rem'}}><img src={volumenButton} alt="Boton de volumen"></img></ClearButton>
        </PlayerContainer>
    )
};

export default Player;