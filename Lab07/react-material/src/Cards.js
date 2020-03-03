import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
	root: {
	  minWidth: 275,
	  backgroundColor: "#ffa000",
	},
	title: {
	  fontSize: 14,
	  fontWeight: "bold",
	},
	pos: {
	  marginBottom: 12,
	},
  });
  

const Cards = () => {
	const classes = useStyles();
	return (
		<div>
			<Grid container justify="center" spacing={5}>
				{/**RESPUESTAS INFORMATIVAS */}
				<Grid item>
					<Card className={classes.root}>
						<CardContent>
							<Typography className={classes.title}>Respuestas Informativas</Typography>
							<Divider />
							<ul>
								<li>
									<Typography>100 Continue</Typography>
								</li>
								<li>
									<Typography>101 Continue Protocol</Typography>
								</li>
								<li>
									<Typography>102 Processing</Typography>
								</li>
							</ul>
						</CardContent>
					</Card>
				</Grid>
				{/**RESPUESTAS SATISFACTORIAS */}
				<Grid item>
					<Card className={classes.root}>
						<CardContent>
							<Typography className={classes.title}>Respuestas Satisfactorias</Typography>
							<Divider />
							<ul>
								<li>
									<Typography>200 OK</Typography>
								</li>
								<li>
									<Typography>204 No Content</Typography>
								</li>
								<li>
									<Typography>206 Partial Content</Typography>
								</li>
							</ul>
						</CardContent>
					</Card>
				</Grid>
				{/** REDIRECCIONES */}
				<Grid item>
					<Card className={classes.root}>
						<CardContent>
							<Typography className={classes.title}>Redirecciones</Typography>
							<Divider />
							<ul>
								<li>
									<Typography>301 Moved Permanently</Typography>
								</li>
								<li>
									<Typography>302 Found</Typography>
								</li>
								<li>
									<Typography>304 Not Modified</Typography>
								</li>
							</ul>
						</CardContent>
					</Card>
				</Grid>
				{/**ERRORES DE CLIENTE*/}
				<Grid item>
					<Card className={classes.root}>
						<CardContent>
							<Typography className={classes.title}>Errores de Cliente</Typography>
							<Divider />
							<ul>
								<li>
									<Typography>400 Bad Request</Typography>
								</li>
								<li>
									<Typography>403 Forbidden</Typography>
								</li>
								<li>
									<Typography>404 Not Found</Typography>
								</li>
							</ul>
						</CardContent>
					</Card>
				</Grid>
				{/**ERRORES DE SERVIDOR*/}
				<Grid item>
					<Card className={classes.root}>
						<CardContent>
							<Typography className={classes.title}>Errores de Servidor</Typography>
							<Divider />
							<ul>
								<li>
									<Typography>500 Internal Server Error</Typography>
								</li>
								<li>
									<Typography>502 Bad Gateway</Typography>
								</li>
								<li>
									<Typography>511 Network Authentication Required</Typography>
								</li>
							</ul>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
		
	)
}

export default Cards;