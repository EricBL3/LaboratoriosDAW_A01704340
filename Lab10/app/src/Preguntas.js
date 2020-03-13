import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
	fontSize: theme.typography.pxToRem(15),
	fontWeight: theme.typography.fontWeightBold,
	color: "#eeeeee",
  },
  panel: {
	backgroundColor: "#039be5",
}
}));


const Preguntas = () => {

	const classes =useStyles();

	return(
		<div className={classes.root}>
			<Typography variant="h5">Preguntas:</Typography>
			{/*Pregunta 1*/}
			<ExpansionPanel className={classes.panel}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>¿Por qué es una buena práctica separar el controlador de la vista?</Typography>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails>
					<Typography>
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 2*/}
			<ExpansionPanel className={classes.panel}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>Aparte de los arreglos $_POST y $_GET, ¿qué otros arreglos están predefinidos en php y cuál es su función?</Typography>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails>
					<Typography>
						<ul>
							<li><strong>GET:</strong> Utilizado para consultar información del servidor. No soporta el envío del payload.</li>

						</ul>
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 3*/}
			<ExpansionPanel className={classes.panel}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>Explora las funciones de php, y describe 2 que no hayas visto en otro lenguaje y que llamen tu atención.</Typography>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails>
					<Typography>

					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 4*/}
			<ExpansionPanel className={classes.panel}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>¿Qué es XSS y cómo se puede prevenir?</Typography>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails>
					<Typography>

					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	)
}

export default Preguntas;