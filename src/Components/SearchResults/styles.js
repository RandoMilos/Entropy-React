import styled from "styled-components";

const ResultContainer = styled.div`
    display: flex;
    align-items     : center;
    justify-content: center;
    flex-direction: column;
    gap: .5rem;
    width: 100%
`;

const ResultTitle = styled.h2`
    color: #aab7fd;
    font-size: 2rem;
    margin: 0;
`;

const ResultSubTitle = styled.p`
    font-size: 1.2rem;
    margin: 0;
`;

const ResultImage = styled.img`
    width: 40rem;
    max-width: 100%;
`;

const ResultErrorText = styled.p`
    color: #0f2f4f;
    font-size: .7rem;
`;

const SearchTitle = styled.h2`
    color: #ffcb8f;
    padding: 1rem 0;
`;

export {
    ResultContainer,
    ResultTitle,
    ResultSubTitle,
    ResultImage,
    ResultErrorText,
    SearchTitle
}