import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
	return (
		<div id="navbar">
			  <AppBar position="static">
				<Toolbar>
				<Typography variant="h6">
					Lab 10: Manejo de formas con php y modelo de capas
				</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)	
}

export default Navbar;