import Link from 'next/link';
import styles from '../styles/movie-info.module.css';
import { API_URL } from '../app/api-config';

export async function getMovie(id: string) {
  console.log(`Fetching movies : ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movies = await getMovie(id);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img
            className={styles.poster}
            src={movies.poster_path}
            alt={movies.title}
          />
          <a href={movies.homepage} target={'_blank'}>
            🏠 HomePage &rarr;
          </a>
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{movies.title}</h1>
          <div className={styles.sub_container}>
            <h3>⭐️ {movies.vote_average.toFixed(1)}</h3>
            <h3>🕖 {movies.runtime}</h3>
          </div>
          <p>{movies.overview}</p>
        </div>
      </div>
    </>
  );
}
