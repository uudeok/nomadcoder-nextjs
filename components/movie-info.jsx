import { baseUrl } from '../app/(Home)/page';

async function getMovie(id) {
    console.log(`Fetching movies : ${Date.now()}`);
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${baseUrl}/${id}`);
    return response.json();
}

export default async function MovieInfo({ id }) {
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>;
}
