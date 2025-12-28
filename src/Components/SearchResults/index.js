import useFetchSearchSongs from "hooks/useFetchSearchSongs";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import loadingResultsIcon from '../../assets/images/SI.png'
import errorFetching from '../../assets/images/brokeSearch.png'
import RecentSearches from "Components/RecentSearches";
import useHistorySearch from "hooks/useHistorySearch";
import { SearchResultAlbumArtist, SearchResultAlbumContainer, SearchResultAlbumThumbnail, SearchResultAlbumTitle } from "theme/SharedStyles";
import { ResultContainer, ResultErrorText, ResultImage, ResultSubTitle, ResultTitle, SearchTitle } from "./styles";

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
        <ResultContainer>
            <ResultTitle>Cargando resultados</ResultTitle>
            <ResultImage alt="Cargando" src={loadingResultsIcon}/>
        </ResultContainer>
    )
    if (error) return (
        <ResultContainer>
            <ResultTitle>Error al descargar la informacion</ResultTitle>
            <ResultImage src={errorFetching} alt="Icono error"/>
            <ResultErrorText>{error.message}</ResultErrorText>
        </ResultContainer>
    )
    
    

    return(
        <SearchResultAlbumContainer>
            {
                albums && albums.length > 0 ? (
                    <>
                        <SearchTitle>Resultados para la busqueda: {query}</SearchTitle>
                        {albums.map((album) => (
                        <SearchResultAlbumContainer
                            key={album.idAlbum}
                            onClick={()=> handleAlbumClick(album)}
                            style={{cursor: 'pointer'}}>
                            <SearchResultAlbumThumbnail src={album.strAlbumThumb} alt={`${album.strAlbum} Caratula`}/>
                            <SearchResultAlbumTitle>{album.strAlbum}</SearchResultAlbumTitle>
                            <SearchResultAlbumArtist>{album.strArtist}</SearchResultAlbumArtist>
                        </SearchResultAlbumContainer>
                        ))}
                    </>
                ) : (
                    <ResultContainer>
                            <ResultTitle>Aquí aparecera tu busqueda.</ResultTitle>
                            <ResultSubTitle>Si ya buscaste y no se muestra nada puedes intentar cambiando la busqueda o con un artista diferente.</ResultSubTitle>
                    </ResultContainer>
                )
            }
            <RecentSearches/>
        </SearchResultAlbumContainer>
    )
}

export default SearchResults;

