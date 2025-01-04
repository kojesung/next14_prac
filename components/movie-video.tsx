import { API_URL } from '../app/(home)/page';

const getVideo = async (id: string) => {
    console.log(Date.now());
    const response = await fetch(`${API_URL}/movies/${id}/videos`);
    return response.json();
};

export default async function MovieVideo({ id }: { id: string }) {
    const movieVideo = await getVideo(id);
    return <div>{JSON.stringify(movieVideo)}</div>;
}
