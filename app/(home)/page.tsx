export const metadata = {
    title: 'Home',
};

const URL = 'https://nomad-movies.nomadcoders.workers.dev'; // 변수가 꼭 컴포넌트 내부에 있지 않아도 됨

const getMovie = async () => {
    const response = await fetch(URL + '/movies');
    const json = await response.json();
    return json;
};

export default async function Page() {
    const movies = await getMovie();
    return <div>{JSON.stringify(movies)}</div>;
}
