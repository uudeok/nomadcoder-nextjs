import { baseUrl } from '../app/constants';
import styles from '../styles/movie-info.module.css';

export async function getMovie(id) {
    const response = await fetch(`${baseUrl}/${id}`);
    return response.json();
}

export default async function MovieInfo({ id }) {
    /* getMovie 함수 호출되지 않고 캐시된 데이터 받아온다*/

    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
            <img src={movie.poster_path} alt={movie.title} className={styles.poster} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐️{movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={'_blank'}>
                    Homepage &rarr;
                </a>
            </div>
        </div>
    );
}
