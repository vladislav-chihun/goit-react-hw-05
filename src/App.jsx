import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from './components/MovieCast/MoviCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
import MoviesPage from './pages/MoviesPage/MoviesPage';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
