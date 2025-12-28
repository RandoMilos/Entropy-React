import styled from "styled-components";
import { Link } from "react-router-dom";

export const LMenuContainer = styled.aside`
    flex-shrink: 0;
    width: 250px;
    height: 100%;
    background-color: #061424;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    overflow-y: auto;
`;

export const LMenuTitle = styled.h1`
    display: flex;
    padding-left: 1rem;
    font-size: 1.7rem;
    color: #5e6cec;
    cursor: default;
    margin-bottom: 1.5rem;
`;

export const LMenuButton = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center; 
    gap: .8rem; 
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: .5rem;
    color: #F4F4F4;
    font-weight: 650;
    font-size: .8rem;
    padding: .6rem 1rem;
    margin-bottom: 0.3rem;

    &:hover {
        background: linear-gradient(124deg, #061424, #0d1961);
        font-weight: 750;
    }
`;

export const LibraryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
`;

export const PlaylistCotainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LMenuIcon = styled.img`
    width: 1.5rem;
    border-radius: 0.3rem;
`;

export const LMenuSubIcon = styled.img`
    width: 1.3rem;
    height: 1.3rem;
    border-radius: .2rem;
    margin-left: 1rem;
`;