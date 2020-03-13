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
					<Typography variant="body1">
						Es una buena práctica porque permite que el código sea más mantenible al tener todo separado por capas. De esta manera, toda la
						lógica y el procesamiento de datos se hace de la parte del controlador y en la vista solo se muestran los resultados de todo.
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 2*/}
			<ExpansionPanel className={classes.panel}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>Aparte de los arreglos $_POST y $_GET, ¿qué otros arreglos están predefinidos en php y cuál es su función?[1]</Typography>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails>
					<Typography>
						<ul>
							<li><strong>$GLOBALS:</strong> Este arreglo guarda todas las variables globales que pueden accederse desde un archivo PHP.</li>
							<li><strong>$_SERVER:</strong> Este arreglo guarda información del servidor tales como la IP, el nombre del host y el script que se está ejecutando</li>
						</ul>
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 3*/}
			<ExpansionPanel className={classes.panel}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>Explora las funciones de php, y describe 2 que no hayas visto en otro lenguaje y que llamen tu atención.[1]</Typography>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails>
					<Typography>
						<ul>
							<li><strong>setcookie():</strong> Esta función se usa para crear un cookie. Esto es útil para identificar a un usuario.</li>
							<li><strong>filter_var():</strong> Esta función valida y limpia los datos de una variable.</li>
						</ul>
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 4*/}
			<ExpansionPanel className={classes.panel}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>¿Qué es XSS y cómo se puede prevenir?[2]</Typography>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails>
					<Typography>
						XSS es un tipo de ataque en donde un hacker inyecta código al output de una página web. Las páginas que no limpian y filtran su 
						información son vulnerables a este tipo de ataques. Para prevenir este tipo de ataques se pueden usar las funciones 
						<strong> htmlspecialchars()</strong> y <strong>htmlentities()</strong>, las cuales convierten todos los posibles caracteres 
						problemáticos a entidades de HTML.
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	)
}

export default Preguntas;