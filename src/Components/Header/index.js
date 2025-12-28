import React from "react";
import logoLow from 'assets/images/logo-low-white.png'
import userIcon from 'assets/icons/user.svg'
import SearchResults from "./SearchBar";
import { Link } from "react-router-dom";
import { CompanyContainer, HeaderContainer, NaviIcon, NaviLogo, UserInfoContainer } from "./styles";
import { ClearButton } from "theme/SharedStyles";


const Header = () => {
    return(
        <header>
            <HeaderContainer>
                <CompanyContainer>
                    <Link to="/"><NaviLogo src={logoLow} alt="Entropy Logo"/></Link>
                </CompanyContainer>
                <UserInfoContainer>
                    <SearchResults/>
                    <ClearButton><NaviIcon src={userIcon} alt="Icono de usuario"/></ClearButton>
                </UserInfoContainer>
            </HeaderContainer>
        </header>
    )
};

export default Header;