import useHistorySearch from "hooks/useHistorySearch";
import { useNavigate } from "react-router-dom";
import deleteSearch from '../../assets/icons/trash.svg'
import { HistoryTitle, NoHistory, RecentSearchContainer, RecentSearchContainerGrid } from "./styles";
import { ClearButton, SearchResultAlbumArtist, SearchResultAlbumContainer, SearchResultAlbumThumbnail, SearchResultAlbumTitle } from "theme/SharedStyles";

const RecentSearches = () => {
    const { history, clearHistory} = useHistorySearch();

    const navigate = useNavigate();

    if (history && history.length === 0) return (
        <NoHistory>Tu historial de busqueda esta vacio, que tal si empiezas buscando tu artista favorito! :)</NoHistory>
    )


    const handleAlbumClick = (album) => {
        navigate(`/album/${album.idAlbum}`);
    }

    return(
        <RecentSearchContainer>
            <HistoryTitle>
                <h3>Busquedas recientes</h3>
                <ClearButton onClick={clearHistory}><img src={deleteSearch}/></ClearButton>
            </HistoryTitle>
            <RecentSearchContainerGrid>
                {
                    history.map((album, index) => (
                        <SearchResultAlbumContainer 
                            key={album.idAlbum || index}
                            style={{cursor: 'pointer'}}
                            onClick={() => handleAlbumClick(album)}>
                            <SearchResultAlbumThumbnail src={album.strAlbumThumb} alt={`${album.strAlbum} Caratula`}/>
                            <SearchResultAlbumTitle className="searchResultAlbum__title">{album.strAlbum}</SearchResultAlbumTitle>
                            <SearchResultAlbumArtist className="searchResultAlbum__album">{album.strArtist}</SearchResultAlbumArtist>
                        </SearchResultAlbumContainer>
                    ))
                }
            </RecentSearchContainerGrid>
        </RecentSearchContainer>
    )
}

export default RecentSearches;