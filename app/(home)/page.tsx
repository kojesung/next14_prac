'use client';

import { useEffect, useState } from 'react';

export default function Page() {
    const URL = 'https://nomad-movies.nomadcoders.workers.dev';
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(URL + '/movies');
        const json = await response.json(); // response.json()은 Promise반환
        setMovies(json);
        setIsLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);

    return <div>{isLoading ? <div>Loading...</div> : JSON.stringify(movies)}</div>;
}
