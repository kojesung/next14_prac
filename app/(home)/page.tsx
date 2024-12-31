import Link from 'next/link';

export const metadata = {
    title: 'Home',
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev'; // 다른 파일에서 사용할 수 있도록 export

const getMovie = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 로딩시간 주기 위해 5초 지연
    // 하나의 컴포넌트가 로드가 완료되지 않으면 Loading.tsx 파일 사용(data fetching중이라고 판단)
    const response = await fetch(API_URL + '/movies');
    const json = await response.json();
    return json;
};

export default async function Page() {
    const movies = await getMovie();
    return (
        <div>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </div>
    );
}
