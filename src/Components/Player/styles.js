import styled from "styled-components";

const PlayerContainer = styled.div`
    flex: 0;
    z-index: 20;
    flex-shrink: 0;
    display: flex;
    padding: .7rem 1rem;
    align-items: center;
    justify-content: space-between;
    background-color: #1A3D64;
    width: 100%;
    box-sizing: border-box;
    color: #fcfcfc;
`;

const PlayerSongInfo = styled.div`
    display: flex;
    height: 4rem;
    align-items: center;
    gap: .6rem;
`;

const PlayerThumbnail = styled.img`
    width: 4rem;
    border-radius: .2rem;
`;

const PlayerSongText = styled.p`
    margin:0.2rem 0;
    font-size: .8rem;
`; 

const PlayerMainContainer = styled.div`
    display: flex;
`;

const PlayerTimer = styled.p`
    display: flex;
    font-size: .8rem;
    align-items: flex-end;
    margin: 0;
    padding: 0 1rem;
`;

const PlayerButtons = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 40rem;
    border-bottom: 3px solid #ffffff;
    padding: .8rem 1rem;
    margin-bottom: .4rem;
`;

export {
    PlayerContainer,
    PlayerSongInfo,
    PlayerThumbnail,
    PlayerSongText,
    PlayerMainContainer,
    PlayerTimer,
    PlayerButtons,
}