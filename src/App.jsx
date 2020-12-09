import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from './components/Form'
import Song from './components/Song'
import Info from './components/Info'

const App = () => {

    const [searchSong, setSearchSong] = useState({})

    const [lyrics, setLyrics] = useState('')

    const [info, setInfo] = useState({})

    useEffect(() => {
        if(Object.keys(searchSong).length === 0) return
        
        const APIsong = async () => {
            const { artist, song } = searchSong
            const URL = `https://api.lyrics.ovh/v1/${artist}/${song}`
            const URLinfo = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`

            const [Rlyrics, Rinfo] = await Promise.all([
                Axios.get(URL),
                Axios.get(URLinfo)
            ])

            setLyrics(Rlyrics.data.lyrics)

            setInfo(Rinfo.data.artists[0])

        }

        APIsong()

    }, [searchSong])

    console.log(lyrics)

    return (
        <>
            <Form 
                setSearchSong={setSearchSong}
            />
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Info 
                            info={info}
                        />
                    </div>
                    <div className='col-md-6'>
                            <Song 
                                lyric={lyrics}
                            />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;