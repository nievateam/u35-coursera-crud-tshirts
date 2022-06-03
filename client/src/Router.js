import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Guided from './components/Guided/Guided'
import Layout from './components/Layout/Layout'
import Project from './components/Project/Project'
import Completed from './components/Completed/Completed'
import Develop from './components/Develop/Develop'

import CssBaseline from '@mui/material/CssBaseline'

function Router() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Guided />} />
            <Route path="/develop" element={<Develop />} />
            <Route path="/project" element={<Project />} />
            <Route path="/guided" element={<Completed />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CssBaseline>
  )
}

export default Router
