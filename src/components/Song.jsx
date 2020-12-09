import React from 'react';

const Song = ({lyric}) => {

    if(lyric === '') return null;

    return (
        <div>
            <h2>Songs Lyrics</h2>
            <p className='letra'>{lyric}</p>
        </div>
    );
};

export default Song;