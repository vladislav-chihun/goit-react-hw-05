import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import HomePage from './pages/HomePage/HomePage'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
