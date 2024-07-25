import { API_URL } from '../../../../api-config';
import { IParams } from '../page';
import styles from '../../../../../styles/movie-provider.module.css';

async function getMovieDetail(id: string) {
  return await fetch(`${API_URL}/${id}`).then((response) => response.json());
}

export default async function ProviderPage({ params: { id } }: IParams) {
  const movies = await getMovieDetail(id);
  return (
    <>
      <div className={styles.container}>
        <h1>production_companies</h1>
        {movies.production_companies.map((company) => (
          <div key={company.id} className={styles.providerContainer}>
            <img src={company.logo_path} alt={company.name} />
            <h4>{company.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
