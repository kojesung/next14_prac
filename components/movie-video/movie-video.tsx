import { API_URL } from '../../app/constants';
import styles from './movie-video.module.css';

const getVideo = async (id: string) => {
    try {
        console.log(`${API_URL}/movies/${id}/videos`);
        const response = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}/videos`);
        if (!response.ok) {
            throw new Error(`Failed to fetch video data: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data); // 응답 데이터 확인
        return data;
    } catch (error) {
        console.error('Error fetching video data:', error);
        throw error;
    }
};

export default async function MovieVideo({ id }: { id: string }) {
    try {
        const movieVideo = await getVideo(id);

        // 데이터 유효성 확인
        if (!Array.isArray(movieVideo) || movieVideo.length === 0) {
            return <div>No videos available for this movie.</div>;
        }

        return (
            <div className={styles.container}>
                {movieVideo.map((video) => (
                    <iframe
                        key={video.id}
                        src={`https://youtube.com/embed/${video.key}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        title={video.name}
                    />
                ))}
            </div>
        );
    } catch (error) {
        return <div>Error loading videos. Please try again later.</div>;
    }
}
