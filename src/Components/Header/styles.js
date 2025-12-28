import styled from "styled-components";

const HeaderContainer = styled.div`
    position: relative;
    z-index: 10;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #0C2B4E;
    background: linear-gradient(124deg, #0C2B4E, #0d1961);
    box-shadow: 0 0 10px #000000;
    padding: 0rem 1rem;
    width: 100%;
    box-sizing: border-box;
`;

const CompanyContainer = styled.div`
    display: flex;
    align-items: center;
    padding: .7rem 1rem;
`;

const NaviLogo = styled.img`
    width: 2rem;
`;

const NaviIcon = styled.img`
    width: 1.2rem;
`;

const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: .5rem;
    gap: 2rem;
    padding-left: 1rem;
`;

export {
    HeaderContainer,
    CompanyContainer,
    NaviLogo,
    NaviIcon,
    UserInfoContainer
}