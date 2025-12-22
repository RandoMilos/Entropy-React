import axios from "axios";
import { useEffect, useState } from "react";

const useFetchSearchSongs = (searchInput) => {
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const params = new URLSearchParams();
    params.set('s', searchInput);

    useEffect(() => {
        if (!searchInput) return;

        const fetchAlbumsData = async () => {
            setIsLoading(true)
            try{
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?${params}`);
                setAlbums(response.data.album || []);

            }catch(error){
                setError(error);
            }finally{
                setIsLoading(false);
            }
        }

        fetchAlbumsData();
    },[searchInput])
    
    return{
        albums,
        error,
        isLoading
    };
}

export default useFetchSearchSongs;