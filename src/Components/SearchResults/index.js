import useFetchSearchSongs from "hooks/useFetchSearchSongs";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import loadingResultsIcon from '../../assets/images/SI.png'
import errorFetching from '../../assets/images/brokeSearch.png'
import RecentSearches from "Components/RecentSearches";
import useHistorySearch from "hooks/useHistorySearch";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('s');
    const { albums, error, isLoading } = useFetchSearchSongs(query);

    const navigate = useNavigate();

    const { addToHistory } = useHistorySearch();

    const handleAlbumClick = (album) => {
        addToHistory(album);
        navigate(`/album/${album.idAlbum}`);
    }

    if (isLoading) return (
        <div className="ResultContainer">
            <h2 className="ResultContainer__title">Cargando resultados</h2>
            <img className="ResultContainer__image" alt="Cargando" src={loadingResultsIcon}/>
        </div>
    )
    if (error) return (
        <div className="ResultContainer">
            <h2 className="ResultContainer__title">Error al descargar la informacion</h2>
            <img className="ResultContainer__image" src={errorFetching} alt="Icono error"/>
            <p className="ResultContainer__errorText">{error.message}</p>
        </div>
    )
    
    

    return(
        <div className="searchResults">
            {
                albums && albums.length > 0 ? (
                    <>
                        <h2 className="searchTitle">Resultados para la busqueda: {query}</h2>
                        {albums.map((album) => (
                        <div 
                            className="searchResultAlbum" 
                            key={album.idAlbum}
                            onClick={()=> handleAlbumClick(album)}
                            style={{cursor: 'pointer'}}>
                            <img className="searchResultAlbum__thumbnail" src={album.strAlbumThumb} alt={`${album.strAlbum} Caratula`}/>
                            <p className="searchResultAlbum__title">{album.strAlbum}</p>
                            <p className="searchResultAlbum__album">{album.strArtist}</p>
                        </div>
                        ))}
                    </>
                ) : (
                    <div className="ResultContainer">
                            <h2 className="ResultContainer__title">Aquí aparecera tu busqueda.</h2>
                            <p className="ResultContainer__subTitle">Si ya buscaste y no se muestra nada puedes intentar cambiando la busqueda o con un artista diferente.</p>
                    </div>
                )
            }
            <RecentSearches/>
        </div>
    )
}

export default SearchResults;

