import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								T-Shirts
						</Typography>
						
						<Button to="/" variant="" component={RouterLink}>
								Guided
						</Button>

						<Button to="/exercise" variant="" component={RouterLink}>
								Exercise
						</Button>

						<Button to="/project" variant="" component={RouterLink}>
								Project
						</Button>

					</Toolbar>
				</AppBar>
			</Box>
		</>
	)
}
