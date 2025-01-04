import { API_URL } from '../app/(home)/page';

const getMovie = async (id: string) => {
    console.log(Date.now());
    const response = await fetch(`${API_URL}/movies/${id}`);
    return response.json();
};

export default async function MovieInfo({ id }: { id: string }) {
    const movieInfo = await getMovie(id);
    return <div>{JSON.stringify(movieInfo.title)}</div>;
}
