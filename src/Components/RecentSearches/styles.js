import styled from "styled-components";

const RecentSearchContainer = styled.div`
    margin-top: 4rem;
`;

const RecentSearchContainerGrid = styled.div`
    padding: 0;
    display: flex;
    flex-direction: row;
    gap: 2rem;
`;

const HistoryTitle = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem 0;
`;

const NoHistory = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 15rem;
    font-size: .9rem;
    font-weight: 600;
    color: #df9c5d;
`;


export {
    RecentSearchContainer,
    RecentSearchContainerGrid,
    HistoryTitle,
    NoHistory,
}