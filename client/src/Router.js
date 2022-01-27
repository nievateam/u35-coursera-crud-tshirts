import CssBaseline from '@mui/material/CssBaseline';

import ShirtState from './context/Shirt/ShirtState'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Exercise from './components/Exercise/Exercise';
import Guided from './components/Guided/Guided';
import Layout from './components/Layout/Layout';
import Project from './components/Project/Project';

function App() {  
  return (

	
	<ShirtState>
    <CssBaseline>



      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Guided />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/project" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CssBaseline>
	</ShirtState>
  )
}

export default App;
