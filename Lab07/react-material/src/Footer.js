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
				<Typography variant="caption">
				 Hecho en: Visual Studio Code    
				    https://code.visualstudio.com/
				</Typography>
			</AppBar>
		</div>
	)
}

export default Footer;