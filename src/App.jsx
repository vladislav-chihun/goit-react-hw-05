import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));

const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
