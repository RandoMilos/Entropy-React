import styled from "styled-components"

const ResultContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .5rem;
`;

const ResultTitle = styled.h1`
    color: #aab7fd;
    font-size: 2rem;
    margin: 0;
`;

const ResultImage = styled.img`
    width: 40rem;
`;

const ResultErrorText = styled.p`
    color: #0f2f4f;
    font-size: .7rem;
`;


const AlbumInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding-bottom: 1rem;

    h2, h3, h4{
        margin: 0;
        padding: .3rem 0rem;
    };
`;

const AlbumInfoThumb = styled.img`
    width: 20rem;
    border-radius: .5rem;
`;

const AlbumInfoTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const AlbumTitleText = styled.h1`
    margin: 0;
`;

export {
    ResultContainer,
    ResultTitle,
    ResultImage,
    ResultErrorText,
    AlbumInfoContainer,
    AlbumInfoThumb,
    AlbumInfoTextContainer,
    AlbumTitleText,
}