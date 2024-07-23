import Link from 'next/link';
import styles from '../styles/movie-nav.module.css';

export default function MovieNavigation({ id }: { id: string }) {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href={`/movies/${id}/credits`}>credits</Link>
          </li>
          <li>
            <Link href={`/movies/${id}/providers`}>providers</Link>
          </li>
          <li>
            <Link href={`/movies/${id}/similar`}>similar</Link>
          </li>
          <li>
            <Link href={`/movies/${id}/videos`}>video</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
