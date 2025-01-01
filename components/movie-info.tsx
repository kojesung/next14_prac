import { API_URL } from '../app/(home)/page';

const getMovie = async (id: string) => {
    console.log(Date.now());
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 로딩시간 주기 위해 5초 지연
    const response = await fetch(`${API_URL}/movies/${id}`);
    return response.json();
};

export default async function MovieInfo({ id }: { id: string }) {
    const movieInfo = await getMovie(id);
    return <div>{JSON.stringify(movieInfo.title)}</div>;
}
