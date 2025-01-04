import { API_URL } from '../../app/constants';
import styles from './movie-infor.module.css';

export const getMovie = async (id: string) => {
    console.log(Date.now());
    const response = await fetch(`${API_URL}/movies/${id}`);
    console.log(response);
    return response.json();
};

export default async function MovieInfo({ id }: { id: string }) {
    const movieInfo = await getMovie(id);
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={movieInfo.poster_path} alt={movieInfo.title} />
            <div>
                <h1 className={styles.title}>{movieInfo.title}</h1>
                <h3 className={styles.info}>⭐️{movieInfo.vote_average.toFixed()}</h3>
                <p className={styles.info}>{movieInfo.overview}</p>
            </div>
        </div>
    );
}
