import { API_URL } from '../../../../api-config';
import { IParams } from '../page';
import styles from '../../../../../styles/movie-credit.module.css';

async function getCredit(id: string) {
  return await fetch(`${API_URL}/${id}/credits`).then((response) =>
    response.json()
  );
}

export default async function CreditPage({ params: { id } }: IParams) {
  const credits = await getCredit(id);
  return (
    <>
      <div className={styles.container}>
        {credits.map((credit) => (
          <div key={credit.id} className={styles.imgContainer}>
            <img src={credit.profile_path} alt={credit.name} />
            <h5>{credit.name}</h5>
            <p>Character: {credit.character}</p>
          </div>
        ))}
      </div>
    </>
  );
}
