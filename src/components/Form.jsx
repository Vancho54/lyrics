import React, { useState } from 'react';

const Form = ({setSearchSong}) => {

    const [error, setError] = useState(false)

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    })

    const { artist, song } = search

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const searchInfo = e => {
        e.preventDefault()

        if (artist.trim() === '' || song.trim() === '') {
            setError(true)
            return
        }

        setError(false)

        setSearchSong(search)
    }

    return (
        <div className='bg-info'>
            { error ? <p className='alert alert-danger text-center p-2'>All fields are required</p>: null}
            <div className='container'>
                <div className='row'>
                    <form
                        onSubmit={searchInfo}
                        className='col card text-white bg-transparent mb-5 pt-5 pb-2'
                    >
                        <fieldset>
                            <legend className='text-center'>Lyrics Searcher</legend>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>
                                            Artist
                                        </label>
                                        <input 
                                            onChange={handleChange}
                                            className='form-control'
                                            type='text'
                                            name='artist'
                                            placeholder='Artist name'
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>
                                            Song
                                        </label>
                                        <input 
                                            onChange={handleChange}
                                            className='form-control'
                                            type='text'
                                            name='song'
                                            placeholder='Song name'
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary float-right'
                            >
                                Search
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;