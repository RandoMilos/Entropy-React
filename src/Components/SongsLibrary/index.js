import React from "react"; 

const SongLibrary = ({ library = [] }) => { 

    return(
        <div className="songListGrid">
            {
                library.map((song, index) => { 
                    const {number, title, album, date} = song
                    return(
                        <div key={number || index} className="songListItem">
                            <p className="songInfo">{number}.</p>
                            <p className="songInfo">{title}</p>
                            <p className="songInfo">{album}</p>
                            <p className="songInfo">{date}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default SongLibrary;