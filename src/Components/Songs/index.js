import React, { useEffect, useState } from "react";
import addButton from 'assets/icons/plus.svg'; 

const Songs = ({ onSongSave }) => {

    const [songs, setSongs] = useState([]); 

    useEffect(() => {
        const fecthSongs = async () => {
            const response = [
                {number:1, title: "No Puedo Dejar De Decir Que Te Quiero", album: "La Maquina Persona", date:2023},
                {number:2, title: "Tele", album: "La Maquina Persona", date:2023},
                {number:3, title: "Si Esto Es", album: "La Maquina Persona", date:2023},
                {number:4, title: "Agua Caliente", album: "La Maquina Persona", date:2023},
                {number:5, title: "Bitter Sweet Simphony", album: "Bitter Sweet Simphony", date:2009},
                {number:6, title: "Girls And Boys", album: "Parklife", date:2009},
            ];
            setSongs(response);
        };
        fecthSongs();
    }, [])
    
    return(
        <div className="songListGrid">
            {
                songs.map((song) => {
                    const {number, title, album, date} = song

                    const handleSaveSong = () => {
                        onSongSave(song); 
                    }

                    return(
                        <div key={number} className="songListItem">
                            <p className="songInfo">{number}.</p>
                            <p className="songInfo">{title}</p>
                            <p className="songInfo">{album}</p>
                            <p className="songInfo">{date}</p>
                            <button onClick={handleSaveSong} className="clearButton">
                                <img src={addButton} alt='Añadir a tu biblioteca'></img>
                            </button>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Songs;