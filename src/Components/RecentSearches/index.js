import useHistorySearch from "hooks/useHistorySearch";
import { useNavigate } from "react-router-dom";
import deleteSearch from '../../assets/icons/trash.svg'

const RecentSearches = () => {
    const { history, clearHistory} = useHistorySearch();

    const navigate = useNavigate();

    if (history && history.length === 0) return (
        <p className="noHistory">Tu historial de busqueda esta vacio, que tal si empiezas buscando tu artista favorito! :)</p>
    )


    const handleAlbumClick = (album) => {
        navigate(`/album/${album.idAlbum}`);
    }

    return(
        <div className="recentSearchContainer">
            <div className="historyTitle">
                <h3>Busquedas recientes</h3>
                <button className="clearButton" onClick={clearHistory}><img src={deleteSearch}/></button>
            </div>
            <div className="recentSearchContainer__grid">
                {
                    history.map((album, index) => (
                        <div className="searchResultAlbum" 
                            key={album.idAlbum || index}
                            style={{cursor: 'pointer'}}
                            onClick={() => handleAlbumClick(album)}>
                            <img className="searchResultAlbum__thumbnail" src={album.strAlbumThumb} alt={`${album.strAlbum} Caratula`}/>
                            <p className="searchResultAlbum__title">{album.strAlbum}</p>
                            <p className="searchResultAlbum__album">{album.strArtist}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecentSearches;