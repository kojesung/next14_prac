import Link from 'next/link';
import Movie from '../../components/movie';

export const metadata = {
    title: 'Home',
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev'; // 다른 파일에서 사용할 수 있도록 export

const getMovie = async () => {
    const response = await fetch(API_URL + '/movies');
    const json = await response.json();
    return json;
};

export default async function Page() {
    const movies = await getMovie();
    return (
        <div>
            {movies.map((movie) => (
                <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
            ))}
        </div>
    );
}
