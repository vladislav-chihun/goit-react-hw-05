

import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'


function App() {
  

  return (
    <div>
      <Routes>
                <Route path="/" element={<Navigation />} />
                <Route path=""/>
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
    </div>
  )
}

export default App
