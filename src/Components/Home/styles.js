import styled from "styled-components";

const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 5rem;
    padding-left: 3rem
`;

const SongListGridContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding-bottom: 1rem;
`;

const SongListItem = styled.div`
    display: flex;
    flex-direction: column;
`;

const MainSongListItemThumb = styled.img`
    width: 23rem;
    border-radius: 1rem;
`;

const MainSongListItemTitle = styled.p`
    font-size: 1rem;
    margin: 0;
    font-weight: 550;
    padding: .5rem 0rem;
`;

const SongListItemArtist = styled.p`
    margin: 0;
    font-size: .9rem;
    font-weight: 300;
`;

const SongListItemThumb = styled.img`
    width: 18rem;
    border-radius: 1rem;
`;

const SongListItemTitle = styled.p`
    font-size: .9rem;
    margin: 0;
    font-weight: 550;
    padding: .5rem 0rem;
`;



export {
    HomeContainer,
    SongListGridContainer,
    SongListItem,
    MainSongListItemThumb,
    MainSongListItemTitle,
    SongListItemArtist,
    SongListItemThumb,
    SongListItemTitle
}