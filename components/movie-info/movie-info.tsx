import { API_URL } from '../../app/constants';
import styles from './movie-infor.module.css';

export const getMovie = async (id: string) => {
    try {
        console.log(Date.now());
        const response = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch movie data: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data); // 가져온 데이터 확인
        return data;
    } catch (error) {
        console.error('Error fetching movie data:', error);
        throw error; // 오류를 상위로 전달
    }
};

export default async function MovieInfo({ id }: { id: string }) {
    try {
        const movieInfo = await getMovie(id);

        if (!movieInfo || !movieInfo.poster_path || !movieInfo.title) {
            return <div>Invalid movie data</div>;
        }

        return (
            <div className={styles.container}>
                <img className={styles.poster} src={movieInfo.poster_path} alt={movieInfo.title} />
                <div>
                    <h1 className={styles.title}>{movieInfo.title}</h1>
                    <h3 className={styles.info}>⭐️{movieInfo.vote_average?.toFixed()}</h3>
                    <p className={styles.info}>{movieInfo.overview}</p>
                </div>
            </div>
        );
    } catch (error) {
        return <div>Error loading movie data. Please try again later.</div>;
    }
}
