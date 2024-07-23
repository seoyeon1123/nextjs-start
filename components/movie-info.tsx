import Link from 'next/link';
import { API_URL } from '../app/(home)/page';
import styles from '../styles/movie-info.module.css';

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
        <img
          className={styles.poster}
          src={movies.poster_path}
          alt={movies.title}
        />
        <div className={styles.info}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>{movies.title}</h1>
            <a href={movies.homepage} target={'_blank'}>
              🏠 HomePage &rarr;
            </a>
          </div>
          <h3>⭐️ {movies.vote_average.toFixed(1)}</h3>
          <p>{movies.overview}</p>
        </div>
      </div>
    </>
  );
}
