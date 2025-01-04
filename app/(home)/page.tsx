import Link from 'next/link';
import Movie from '../../components/movie/movie';
import styles from './home.module.css';
import { API_URL } from '../constants';

export const metadata = {
    title: 'Home',
};

const getMovie = async () => {
    const response = await fetch(API_URL + '/movies');
    const json = await response.json();
    return json;
};

export default async function Page() {
    const movies = await getMovie();
    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
            ))}
        </div>
    );
}
