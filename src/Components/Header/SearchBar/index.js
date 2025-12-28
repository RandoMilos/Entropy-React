import React, {useState} from 'react';
import searchIcon from 'assets/icons/search.svg';
import { useNavigate } from 'react-router-dom';
import useHistorySearch from 'hooks/useHistorySearch';
import { NaviIcon, SearchBarBody, SearchBarInput } from './styles';
import { ClearButton } from 'theme/SharedStyles';

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
            <SearchBarBody>    
                <SearchBarInput 
                    className='searchBarText' 
                    type='search' 
                    value={searchInput}
                    onChange={handleSearchChange}
                    onFocus={handleFocus}
                    placeholder='Buscar'></SearchBarInput>
                <ClearButton><NaviIcon src={searchIcon} alt="Boton busqueda"/></ClearButton>
            </SearchBarBody>    
        </form>
    );
};

export default SearchBar;