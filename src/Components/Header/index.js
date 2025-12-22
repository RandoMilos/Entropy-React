import React from "react";
import logoLow from 'assets/images/logo-low-white.png'
import userIcon from 'assets/icons/user.svg'
import SearchResults from "./SearchBar";
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header>
            <div className="headerContainer">
                <div className="companyContainer">
                    <Link to="/"><img className="naviLogo" src={logoLow} alt="Entropy Logo"></img></Link>
                </div>
                <div className="userInfoContainer">
                    <SearchResults/>
                    <button className="clearButton"><img className= "naviIcon"src={userIcon} alt="Icono de usuario"></img></button>
                </div>
            </div>
        </header>
    )
};

export default Header;