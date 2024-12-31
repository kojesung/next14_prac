import { API_URL } from '../../../(home)/page';

export default async function MovieDetails({ params }: { params: { id: string } }) {
    const getMovie = async (id: string) => {
        await new Promise((resolve) => setTimeout(resolve, 5000)); // 로딩시간 주기 위해 5초 지연
        const response = await fetch(`${API_URL}/movies/${urlParams.id}`);
        return response.json();
    };

    const getVideo = async (id: string) => {
        const response = await fetch(`${API_URL}/movies/${urlParams.id}/videos`);
        return response.json();
    };
    const urlParams = await params;
    const movie = await getMovie(urlParams.id);
    const video = await getVideo(urlParams.id);
    return (
        <div>
            <h1>{movie.title}</h1>
            <h2>{JSON.stringify(video)}</h2>
        </div>
    );
}
