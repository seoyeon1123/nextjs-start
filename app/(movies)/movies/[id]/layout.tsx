'use client';

import { useParams } from 'next/navigation';
import MovieNavigation from '../../../../components/movie-nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { id } = useParams();

  return (
    <div>
      <MovieNavigation id={id as string} />
      {children}
    </div>
  );
}
