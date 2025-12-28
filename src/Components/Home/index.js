import useFetchHome from 'hooks/useFetchHome'
import { HomeContainer, MainSongListItemThumb, MainSongListItemTitle, SongListGridContainer, SongListItem, SongListItemArtist, SongListItemThumb, SongListItemTitle } from './styles';

const Home = () => {
    const { forYouSongs, recentSongs, meneFans, error, isLoading} = useFetchHome();

    const renderingSongs = () => {
        if (error) return error;
        if (isLoading) return <p>cargando datos</p>;
        else {
            return (
                <div>    
                    <SongListGridContainer>
                        {
                            forYouSongs.map((song) => {
                                const { id, name, artista, thumbnail } = song;
                                return(
                                    <SongListItem key={id}>
                                        <MainSongListItemThumb src={thumbnail} alt={`${name} caratula`}/>
                                        <MainSongListItemTitle>{name}</MainSongListItemTitle>
                                        <SongListItemArtist>{artista}</SongListItemArtist>
                                    </SongListItem>
                                )
                            })
                        }
                    </SongListGridContainer>
                    <h3>Escuchado Recientemente</h3>
                    <SongListGridContainer>
                        {
                            recentSongs.map((song) => {
                                const { id, name, artista, thumbnail } = song;
                                return(
                                    <SongListItem>
                                        <SongListItemThumb src={thumbnail} alt={`${name} caratula`}/>
                                        <SongListItemTitle>{name}</SongListItemTitle>
                                        <SongListItemArtist>{artista}</SongListItemArtist>
                                    </SongListItem>
                                )
                            })
                        }
                    </SongListGridContainer>
                    <h3>Para los fans de Méne</h3>
                    <SongListGridContainer>
                        {
                            meneFans.map((song) => {
                                const { id, name, artista, thumbnail } = song;
                                return(
                                    <SongListItem key={id}>
                                        <SongListItemThumb src={thumbnail} alt={`${name} caratula`}/>
                                        <SongListItemTitle>{name}</SongListItemTitle>
                                        <SongListItemArtist>{artista}</SongListItemArtist>
                                    </SongListItem>
                                )
                            })
                        }
                    </SongListGridContainer>
                </div>
            )
        }
    } 

    return(
        <HomeContainer>
            <h1>Inicio</h1>
            <h3>Lo que tenemos hoy para ti</h3>
            {renderingSongs()}
        </HomeContainer>
    )
};

export default Home;