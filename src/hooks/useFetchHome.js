import { useState, useEffect } from "react";
import kravMaga from 'assets/images/krav-maga.jpg';
import tiw from 'assets/images/tiw.jpg';
import ATP from 'assets/images/atp.jpg';
import Eden from 'assets/images/ityttmom.jpg';
import Lux from 'assets/images/lux-icon.png';
import hwh from 'assets/images/hwh.jpg';
import ultraSound from 'assets/images/ultrasound.jpg';
import hypnotize from 'assets/images/hypnotize.jpg';
import refu from 'assets/images/2054.jpg'
import smile from 'assets/images/smile.png';
import endlc from 'assets/images/endlc.jpg'
import roy from 'assets/images/royEnVivo.jpg'
import tld from 'assets/images/tld.jpg'
import odi from 'assets/images/odisea.jpg'

const useFetchHome = () => {
    const [forYouSongs, setForYouSongs] = useState([]);
    const [recentSongs, setRecentSongs] = useState([]);
    const [meneFans, setMeneFans] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchAllData = async () => {
            try{
                const forYouSongsData = [
                {id: 1, name: "Krav Maga - Single", artista:"NSQK", thumbnail:kravMaga},
                {id: 2, name: "This is Why", artista:"Paramore", thumbnail:tiw},
                {id: 3, name: "ATP", artista:"NSQK", thumbnail:ATP},
                {id: 4, name: "i think you think too much of me", artista:"EDEN", thumbnail:Eden},
            ];

                const recentSongsData = [
                {id: 1, name: "hit me were it hurts", artista:"skrillex", thumbnail:hwh},
                {id: 2, name: "((((((ultraSOUND))))))", artista:"The Neighbourhood", thumbnail:ultraSound},
                {id: 3, name: "Hypnotize", artista:"System Of A Down", thumbnail:hypnotize},
                {id: 4, name: "SMILE! :D", artista:"Porter Robinson", thumbnail:smile},
                {id: 5, name: "Lux", artista:"Rosalia", thumbnail:Lux},
            ];

                const meneFansData = [
                {id: 1, name: "Prohibido escuchar hasta 2054", artista:"Refugee", thumbnail:refu},
                {id: 2, name: "El Niño De Los Corazones", artista:"legallyrxx", thumbnail:endlc},
                {id: 3, name: "Roy en vivo", artista:"NSQK", thumbnail:roy},
                {id: 4, name: "TODOS LOS DíAS TODO EL DíA", artista:"LATIN MAFIA", thumbnail:tld},
                {id: 5, name: "ODISEA", artista:"Refugee", thumbnail:odi},
            ];
                setForYouSongs(forYouSongsData);
                setRecentSongs(recentSongsData);
                setMeneFans(meneFansData)
            
            }catch(error){
                setError(error);
            } finally{
                setIsLoading(false);
            }
        }
        fetchAllData()
    }, [])

    return {
        forYouSongs,
        recentSongs,
        meneFans,
        error,
        isLoading
    }

};

export default useFetchHome;