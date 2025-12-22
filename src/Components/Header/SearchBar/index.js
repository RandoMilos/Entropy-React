import React, {useState} from 'react';
import searchIcon from 'assets/icons/search.svg';
import { useNavigate } from 'react-router-dom';
import useHistorySearch from 'hooks/useHistorySearch';

const SearchBar = () => {
    
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const { addToHistory } = useHistorySearch();

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        addToHistory(searchInput);
        navigate(`/search-results?s=${searchInput}`);
    }

    const handleFocus = () =>{
        if (searchInput){
            navigate(`/search-results?s=${searchInput}`)
        }
        else{
            navigate(`/search-results`)
        }
    }
    
    return(
        <form onSubmit={handleSubmitSearch}>
            <div className='searchBarBody' to="/search-results">    
                <input 
                    className='searchBarText' 
                    type='search' 
                    value={searchInput}
                    onChange={handleSearchChange}
                    onFocus={handleFocus}
                    placeholder='Buscar'></input>
                <button type='submit' className="clearButton"><img className="naviIcon" src={searchIcon} alt="Boton busqueda"></img></button>
            </div>    
        </form>
    );
};

export default SearchBar;