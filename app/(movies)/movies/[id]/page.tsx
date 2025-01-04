import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info/movie-info';
import MovieVideo from '../../../../components/movie-video/movie-video';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface IParams {
    params: { id: string };
}

export async function generateMetadata({ params }: IParams) {
    const { id } = await params;
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

export default async function MovieDetails({ params }: IParams) {
    // params만 받고
    const { id } = await params; // 내부에서 await 후 구조분해할당

    return (
        <div>
            <Suspense fallback={<div>Loading Movie Info</div>}>
                <MovieInfo id={id}></MovieInfo>
            </Suspense>
            <Suspense fallback={<div>Loading Movie Video</div>}>
                <MovieVideo id={id}></MovieVideo>
            </Suspense>
        </div>
    );
}
