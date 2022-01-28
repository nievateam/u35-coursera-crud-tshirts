import { Outlet } from 'react-router-dom'
import Header from './Header'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material'

export default function Layout() {
	return (
		<>
			<Header />

			<Grid container component="main" sx={{ height: '100vh' }}>
				<Container maxWidth="lg">			
					<Outlet />
				</Container>
			</Grid>

		</>
	)
}