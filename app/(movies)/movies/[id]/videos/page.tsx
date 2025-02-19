import { API_URL } from '../../../../api-config';
import styles from '../../../../../styles/movie-videos.module.css';
import { IParams } from '../page';

async function getVideos(id: string) {
  console.log(`Fetching videos : ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return await fetch(`${API_URL}/${id}/videos`).then((response) =>
    response.json()
  );
}

export default async function MovieVideos({ params: { id } }: IParams) {
  const videos = await getVideos(id);
  return (
    <>
      <div className={styles.container}>
        {videos.map((video) => (
          <iframe
            key={video.id}
            src={`https://youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.name}
          />
        ))}
      </div>
    </>
  );
}
