import { API_URL } from '../app/(home)/page';

const getVideo = async (id: string) => {
    console.log(Date.now());
    await new Promise((resolve) => setTimeout(resolve, 5000)); // 로딩시간 주기 위해 5초 지연
    throw new Error('고장남!');
    const response = await fetch(`${API_URL}/movies/${id}/videos`);
    return response.json();
};

export default async function MovieVideo({ id }: { id: string }) {
    const movieVideo = await getVideo(id);
    return <div>{JSON.stringify(movieVideo)}</div>;
}
