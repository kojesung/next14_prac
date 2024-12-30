export const metadata = {
    title: 'Home',
};

const URL = 'https://nomad-movies.nomadcoders.workers.dev'; // 변수가 꼭 컴포넌트 내부에 있지 않아도 됨

const getMovie = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // 로딩시간 주기 위해 5초 지연
    // 하나의 컴포넌트가 로드가 완료되지 않으면 Loading.tsx 파일 사용(data fetching중이라고 판단)
    const response = await fetch(URL + '/movies');
    const json = await response.json();
    return json;
};

export default async function Page() {
    const movies = await getMovie();
    return <div>{JSON.stringify(movies)}</div>;
}
