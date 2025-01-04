import { API_URL } from '../../app/constants';
import styles from './movie-video.module.css';

const getVideo = async (id: string) => {
    console.log(`${API_URL}/movies/${id}/videos`);
    const response = await fetch(`${API_URL}/movies/${id}/videos`);
    console.log(response);
    return response.json();
};

export default async function MovieVideo({ id }: { id: string }) {
    const movieVideo = await getVideo(id);
    return (
        <div className={styles.container}>
            {movieVideo.map((video) => (
                <iframe
                    key={video.id}
                    src={`https://youtube.com/embed/${video.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    // picture-in-picture 권한 추가
                    allowFullScreen
                    title={video.name}
                />
            ))}
        </div>
    );
}
