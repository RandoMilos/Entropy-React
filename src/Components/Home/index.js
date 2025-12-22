import useFetchHome from 'hooks/useFetchHome'

const Home = () => {
    const { forYouSongs, recentSongs, meneFans, error, isLoading} = useFetchHome();

    const renderingSongs = () => {
        if (error) return error;
        if (isLoading) return <p>cargando datos</p>;
        else {
            return (
                <div className='homeMainContainer'>    
                    <div className="songListGridContainer">
                        {
                            forYouSongs.map((song) => {
                                const { id, name, artista, thumbnail } = song;
                                return(
                                    <div className='mainSongListItem' key={id}>
                                        <img className='mainSongListItem__thumbnail' src={thumbnail} alt={`${name} caratula`}/>
                                        <p className='mainSongListItem__songTitle'>{name}</p>
                                        <p className='mainSongListItem__songArtist'>{artista}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h3>Escuchado Recientemente</h3>
                    <div className="songListGridContainer">
                        {
                            recentSongs.map((song) => {
                                const { id, name, artista, thumbnail } = song;
                                return(
                                    <div className='songListItem' key={id}>
                                        <img className='songListItem__thumbnail' src={thumbnail} alt={`${name} caratula`}/>
                                        <p className='songListItem__songTitle'>{name}</p>
                                        <p className='songListItem__songArtist'>{artista}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h3>Para los fans de Méne</h3>
                    <div className="songListGridContainer">
                        {
                            meneFans.map((song) => {
                                const { id, name, artista, thumbnail } = song;
                                return(
                                    <div className='songListItem' key={id}>
                                        <img className='songListItem__thumbnail' src={thumbnail} alt={`${name} caratula`}/>
                                        <p className='songListItem__songTitle'>{name}</p>
                                        <p className='songListItem__songArtist'>{artista}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
    } 

    return(
        <div className="homeContainer">
            <h1>Inicio</h1>
            <h3>Lo que tenemos hoy para ti</h3>
            {renderingSongs()}
        </div>
    )
};

export default Home;