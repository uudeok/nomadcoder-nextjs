/** app/page.jsx 은 진입점 root */

import Movie from '../../components/movie';
import styles from '../../styles/home.module.css';
import { baseUrl } from '../constants';

export const metadata = {
    title: 'Home',
};

async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(baseUrl);
    const result = await response.json();
    return result;
}

export default async function HomePage() {
    const movies = await getMovies();

    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
            ))}
        </div>
    );
}
