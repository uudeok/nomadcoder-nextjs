/** app/page.jsx 은 진입점 root */
import Link from 'next/link';

export const metadata = {
    title: 'Home',
};

export const baseUrl = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(baseUrl);
    const result = await response.json();
    return result;
}

export default async function HomePage() {
    const movies = await getMovies();

    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </ul>
    );
}
