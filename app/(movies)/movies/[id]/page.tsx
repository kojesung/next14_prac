import { decodeFormState } from 'next/dist/server/app-render/entry-base';
import { API_URL } from '../../../(home)/page';
import { Suspense } from 'react';
import MovieInfo from '../../../../components/movie-info';
import MovieVideo from '../../../../components/movie-video';

export default async function MovieDetails({ params }: { params: { id: string } }) {
    const urlParams = await params;
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <MovieInfo id={urlParams.id}></MovieInfo>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <MovieVideo id={urlParams.id}></MovieVideo>
            </Suspense>
        </div>
    );
}
