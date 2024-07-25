'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/navigation.module.css';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const path = usePathname();
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  console.log(path);
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
            {path === '/' ? '🏠' : null}
          </li>
          <li>
            <button className={styles.btn} onClick={goBack}>
              Back
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
