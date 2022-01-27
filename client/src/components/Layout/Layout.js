import { Outlet } from 'react-router-dom'
import Header from './Header'
import Grid from '@mui/material/Grid';

export default function Layout() {
	return (
		<>
			<Header />

			<Grid container component="main" sx={{ height: '100vh' }}>
			
					<Outlet />

			</Grid>

		</>
	)
}