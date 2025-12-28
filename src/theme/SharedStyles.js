import styled from "styled-components";

export const ClearButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    color: inherit;
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

export const SearchResultAlbumContainer = styled.div`
    width: 100%;
`;

export const SearchResultAlbumThumbnail = styled.img`
    width: 13rem;
    border-radius: .3rem;
`;

export const SearchResultAlbumTitle = styled.p`
    margin: 0;
    font-weight: 650;
    font-size: 1.2rem;
`;

export const SearchResultAlbumArtist = styled.p`
    margin: 0;
    font-size: 1rem;
`;