import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Divider from '@material-ui/core/Divider';

import Cards from './Cards';

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

const Descripciones = () => {

	const classes =useStyles();

	return (
		<div className={classes.root}>
			<Typography variant="h5">Descripciones:</Typography>
			{/*URL*/}
			<ExpansionPanel className={classes.panel}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>URL</Typography>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails>
					<Typography>
					Un URL incorpora el nombre del dominio junto con información detallada para completar una dirección a una página web específica en un navegador. [1]
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel >
			{/*MIME*/}
			<ExpansionPanel className={classes.panel}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>MIME</Typography>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails>
					<Typography>
					Multipurpose Internet Mail Extensions por sus siglas en inglés es un estándar que indica la naturaleza y el formato de un documento, archivo o conjunto de bytes. [2]
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel >
			{/*ERRORES HTTP*/}
			<ExpansionPanel className={classes.panel} >
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>Métodos y códigos de errores HTTP</Typography>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails>
					<Typography>
					Indican si se completo satisfactoriamente una solicitud HTTP específica.[3] Se dividen en 5 categorías generales que son:
					<br/><br/>
					<Cards />
					</Typography>
					
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*HTML5*/}
			<ExpansionPanel className={classes.panel}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>HTML5</Typography>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails>
					<Typography>
					HTML5 es en realidad un término que define a varias tecnologías incluyendo HTML. Estas tecnologías incluyen varios APIs y estándares tales como WebGL y SVG.[4]
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*JS*/}
			<ExpansionPanel className={classes.panel}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>JS</Typography>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails>
					<Typography>
					JavaScript (JS) es un lenguaje ligero e interpretado con funciones de primera clase basado en prototipos. Es utilizado para páginas web y otros entornos tales como Node.js y Adobe Acrobat. [5]
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*PHP*/}
			<ExpansionPanel className={classes.panel}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>PHP</Typography>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails>
					<Typography>
					PHP es un lenguaje de scripting especialmente diseñado para desarrollo web. Lo que lo distingue de JS es que el código está siendo ejecutado en el servidor.[6]
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*JSP*/}
			<ExpansionPanel className={classes.panel}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>JSP</Typography>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails>
					<Typography>
					Java Server Pages (JSP) es una tecnología de programación del lado del servidor que permite un método dinámico e independiente de plataformas para desarrollar aplicaciones web. [7]
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*AJAX*/}
			<ExpansionPanel className={classes.panel}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>AJAX</Typography>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails>
					<Typography>
					Asynchronous JavaScript and XML (Ajax) es una técnica de desarrollo web utilizado en la programación del lado del cliente para permitir enviar y recibir información de una base de datos o servidor.[8]
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	)
}

export default Descripciones;