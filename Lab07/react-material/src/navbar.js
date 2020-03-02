// Navbar.js

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography  from '@material-ui/core/Typography';



const NavBar = () => {
    return(
        <div>
		
        <AppBar position="static">
            <Toolbar>
				<Grid container spacing={3}>
					<Grid item xs >
						<Typography variant="h4">
							Eric Buitrón López
						</Typography>
					</Grid>
					<Grid item xs>
						<Typography variant="h4">
							A01704340@itesm.mx
						</Typography>
						
					</Grid>
					<Grid item xs>
						<Typography variant="h4">
							A01704340
						</Typography>
						
					</Grid>
				</Grid>
            </Toolbar>
        </AppBar>
		
		
        </div>
    )
}
export default NavBar;