import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../../styles/loading.module.css';

export default function Loading() {
  return (
    <>
      <div className={styles.spinnerContainer}>
        <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      </div>
    </>
  );
}
