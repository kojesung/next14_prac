import { API_URL } from '../../../(home)/page';

export default async function MovieDetails({ params }: { params: { id: string } }) {
    const getMovie = async (id: string) => {
        console.log(Date.now());
        await new Promise((resolve) => setTimeout(resolve, 5000)); // 로딩시간 주기 위해 5초 지연
        const response = await fetch(`${API_URL}/movies/${urlParams.id}`);
        return response.json();
    };

    const getVideo = async (id: string) => {
        console.log(Date.now());
        await new Promise((resolve) => setTimeout(resolve, 5000)); // 로딩시간 주기 위해 5초 지연
        const response = await fetch(`${API_URL}/movies/${urlParams.id}/videos`);
        return response.json();
    };
    const urlParams = await params;
    const [movie, video] = await Promise.all([getMovie(urlParams.id), getVideo(urlParams.id)]); // 작업을 동시에 진행하게 해두었지만
    // UI를 띄워주기 위해선 결과적으로 movie와 video의 fetching이 모두 완료되어야하는 상황임
    return (
        <div>
            <h1>{movie.title}</h1>
            <h2>{JSON.stringify(video)}</h2>
        </div>
    );
}
