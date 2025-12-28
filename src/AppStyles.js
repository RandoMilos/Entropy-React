import styled from "styled-components";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow: hidden; 
    background-color: #050d17;
`;

const MainContainer = styled.div`
    display: flex;
    flex: 1;       
    width: 100%;
    height: 0;      
    overflow: hidden; 
`;

const MainContentContainer = styled.div`
    flex: 1;
    height: 100%;   
    overflow-y: scroll; 
    overflow-x: hidden;
    padding: 2rem;
    color: white;
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background: rgba(0,0,0,0.1);
    }
    &::-webkit-scrollbar-thumb {
        background: #4f4f4f;
        border-radius: 10px;
    }
`;

const PlayerContainer = styled.div`
    flex-shrink: 0;
`;

export {
    AppContainer,
    MainContainer,
    MainContentContainer,
    PlayerContainer
}