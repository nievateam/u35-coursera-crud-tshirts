import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Guided from './components/Guided/Guided'
import Layout from './components/Layout/Layout'
import Project from './components/Project/Project'
import Completed from './components/Completed/Completed'
import Develop from './components/Develop/Develop'
import ShirtState from './context/Shirt/ShirtState'

import CssBaseline from '@mui/material/CssBaseline'

function Router() {
  return (
    <ShirtState>
      <CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Guided />} />
              <Route path="/develop" element={<Develop />} />
              <Route path="/project" element={<Project />} />
              <Route path="/completed" element={<Completed />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ShirtState>
  )
}

export default Router
