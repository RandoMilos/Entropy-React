import axios from "axios";
const { useState, useEffect } = require("react")

const useFetchAlbumInfo = (id) => {
    const [album, setAlbum] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        if (!id) return;

        const fecthAlbumData = async () => {
            setIsLoading(true)
            try{
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`);
                setAlbum(response.data.album || []);
            }catch(error){
                setError(error);
            }finally{
                setIsLoading(false);
            }
        }

        fecthAlbumData();
    },[id])

    return{
        album,
        error,
        isLoading
    }
}

export default useFetchAlbumInfo;