import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography  from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
	appBar: {
	  top: 'auto',
	  bottom: 0,
	},
  }));

const Footer = () => {
	const classes = useStyles();
	return(
		<div>
			<AppBar className={classes.appBar} color="primary" >
				<Grid container justify="space-between" spacing={2}>
					<Grid item>
					<Typography variant="caption">
					Hecho en: Visual Studio Code &ensp; https://code.visualstudio.com/    
					</Typography>
					</Grid>
					<Grid item>
					<Typography variant="caption">  
					Hecho con: Material UI &ensp; 	https://material-ui.com
					</Typography>
					</Grid>
				</Grid>
			</AppBar>
		</div>
	)
}

export default Footer;