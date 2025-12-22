import useFetchAlbumInfo from "hooks/useFetchAlbumInfo";
import { useParams } from "react-router-dom";
import loadingResultsIcon from '../../assets/images/SI.png'
import errorFetching from '../../assets/images/brokeSearch.png'

const AlbumInfo = () => {
    
    const { id } = useParams();

    const { album, error, isLoading } = useFetchAlbumInfo(id);

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
        <div>
            {
                album.map((album) => (
                        <div 
                            key={album.idAlbum}
                            className="albumInfo">
                            <div className="albumInfo__mainInfo">
                                <img className="albumInfo__thumb" 
                                src={album.strAlbumThumb} 
                                alt={`${album.strAlbum} Caratula`}/>
                                <div className="albumInfo__text">
                                    <h1 className="albumTextTitle">{album.strAlbum}</h1>
                                    <h2 className="albumText">{album.strArtist}</h2>
                                    <h3 className="albumText">Año de lazamiento: {album.intYearReleased}</h3>
                                    <h4 className="albumText">{album.strGenre ?? `Genero no disponible`}</h4>
                                </div>
                            </div>
                            <p>{album.strDescription ?? (album.strDescriptionEN ?? `No se ha encontrado una descripcion del album :(`)}</p>
                        </div>
                        ))
            }
        </div>
    )
}

export default AlbumInfo;