import { API_URL } from '../../../../api-config';
import { IParams } from '../page';
import styles from '../../../../../styles/movie-similar.module.css';

async function getSimilar(id: string) {
  return await fetch(`${API_URL}/${id}/similar`).then((response) =>
    response.json()
  );
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  return `${year}.${month}.${day}`;
}

export default async function SimilarPage({ params: { id } }: IParams) {
  const similars = await getSimilar(id);

  return (
    <>
      <div className={styles.container}>
        {similars.map((similar) => (
          <div key={similar.id} className={styles.imgContainer}>
            <img src={similar.poster_path} alt={similar.title} />
            <h4>{similar.title}</h4>
            <div className={styles.subContainer}>
              <h5>⭐️ {similar.vote_average.toFixed(1)}</h5>
              <h5>🗓️ {formatDate(similar.release_date)}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
