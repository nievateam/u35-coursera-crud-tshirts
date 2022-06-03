import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Guided from './components/Guided/Guided'
import Layout from './components/Layout/Layout'
import Project from './components/Project/Project'
import CssBaseline from '@mui/material/CssBaseline'

function Router() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Guided />} />
            <Route path="/project" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CssBaseline>
  )
}

export default Router
