import useFetchAlbumInfo from "hooks/useFetchAlbumInfo";
import { useParams } from "react-router-dom";
import loadingResultsIcon from '../../assets/images/SI.png'
import errorFetching from '../../assets/images/brokeSearch.png'
import { AlbumInfoContainer, AlbumInfoTextContainer, AlbumInfoThumb, AlbumTitleText, ResultContainer, ResultErrorText, ResultImage, ResultTitle } from "./styles";

const AlbumInfo = () => {
    
    const { id } = useParams();

    const { album, error, isLoading } = useFetchAlbumInfo(id);

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
        <div>
            {
                album.map((album) => (
                        <div key={album.idAlbum}>
                            <AlbumInfoContainer>
                                <AlbumInfoThumb 
                                src={album.strAlbumThumb} 
                                alt={`${album.strAlbum} Caratula`}/>
                                <AlbumInfoTextContainer>
                                    <AlbumTitleText className="albumTextTitle">{album.strAlbum}</AlbumTitleText>
                                    <h2 className="albumText">{album.strArtist}</h2>
                                    <h3 className="albumText">Año de lazamiento: {album.intYearReleased}</h3>
                                    <h4 className="albumText">{album.strGenre ?? `Genero no disponible`}</h4>
                                </AlbumInfoTextContainer>
                            </AlbumInfoContainer>
                            <p>{album.strDescription ?? (album.strDescriptionEN ?? `No se ha encontrado una descripcion del album :(`)}</p>
                        </div>
                        ))
            }
        </div>
    )
}

export default AlbumInfo;