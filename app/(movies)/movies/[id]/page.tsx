export default async function MovieDetails({
    params,
    searchParams,
}: {
    params: { id: string };
    searchParams: { any };
}) {
    const urlParams = await params;
    const urlSearchParams = await searchParams;
    console.log(urlParams, urlSearchParams);
    return <h1>Movie {urlParams.id}</h1>;
}
