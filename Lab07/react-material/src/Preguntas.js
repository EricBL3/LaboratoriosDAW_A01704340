import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


const Preguntas = () => {

	const classes =useStyles();

	return(
		<div className={classes.root}>
			<Typography variant="h5">Preguntas:</Typography>
			{/*Pregunta 1*/}
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>¿Cuál es la diferencia entre Internet y la World Wide Web?</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
					El internet es la infraestructura de una red global mientras que la World Wide Web es un servicio que provee una colección de información que se accesa a través del internet.[9]
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 2*/}
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?[10]</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						<ul>
							<li><strong>GET:</strong> Utilizado para consultar información del servidor. No soporta el envío del payload.</li>
							<li><strong>HEAD:</strong> Utilizado para obtener información sobre un recurso determinado sin regresar el registro.</li>
							<li><strong>POST:</strong> Utilizado para solicitar la creación de un registro. Soporta el envío del payload.</li>
							<li><strong>PUT:</strong> Utilizado para actualizar por completo un registro existente.</li>
							<li><strong>PATCH:</strong> Utilizado para actualizar un fragmento del registro.</li>
							<li><strong>DELETE:</strong> Utilizado para eliminar un registro existente.</li>
						</ul>
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 3*/}
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
					Se debe utilizar el método <strong>POST</strong> ya que este permite el envío de payloads. Lo que significa que los datos del formulario solo van a llegar al destino al que deben de llegar y no van a poder ser vistos por cualquiera.
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 4*/}
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
					Se utiliza el método <strong>GET</strong>.[3]
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 5*/}
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
					Es el código OK que significa que la solicitud tuvo éxito. El éxito tiene significados diferentes dependiendo de la solicitud HTTP.[3]
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 6*/}
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
					Si ya que este error significa que no se pudo encontrar el contenido solicitado. [3]
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 7*/}
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
					Si ya que este error significa que el servidor encontró una situación que no sabe manejar. [3]
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 8*/}
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						Un atributo depreciado/desaprobado es aquel que ya está desactualizado y puede volverse obsoleto en versiones futuras de HTML.[11] Algunos ejemplos son:
						<strong><br/>
						&lt;center><br/>
						&lt;font><br/>
						&lt;strike>
						</strong>
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 9*/}
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>¿Cuáles son las diferencias principales entre HTML 4 y HTML5? [12]</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						<ul>
							<li>HTML5 tiene soporte nativo de video y audio</li>
							<li>HTML5 tiene un manejo de errores consistente</li>
							<li>HTML5 soporta más características para aplicaciones web</li>
							<li>Se mejoró el soporte a dispositivos móbiles</li>
						</ul>
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 10*/}
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>¿Qué componentes de estructura y estilo tiene una tabla?</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						<Grid container justify="center" spacing={9}>
							<Grid item >
								<strong>Estructura:[13]</strong>
								<ul>
									<li>&lt;caption> : titulo de la tabla</li>
									<li>&lt;table> : contenedor para datos tabulados</li>
									<li>&lt;tbody> : define un grupo de filas de la tabla</li>
									<li>&lt;td> : celda de una tabla. Debe ser hijo de &lt;tr></li>
									<li>&lt;tfoot> : define un grupo de filas de tablas al final de la tabla</li>
									<li>&lt;th> : encabezado de la tabla</li>
									<li>&lt;thead> : define un grupo de filas de tablas al principio de la tabla</li>
									<li>&lt;tr> : fila de la tabla</li>
								</ul>
							</Grid>
							<Grid item>
								<strong>Estilo:[14]</strong>
								<ul>
									<li>table layout</li>
									<li>width</li>
									<li>border-collapse</li>
									<li>border</li>
									<li>padding</li>
									<li>text-align</li>
								</ul>
							</Grid>
						</Grid>
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 11*/}
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>¿Cuáles son los principales controles de una forma HTML5? [15]</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						<ul>
							<li>&lt;input> : define control por input dependiendo del tipo</li>
							<li>&lt;textarea> : define un área de texto para input</li>
							<li>&lt;select> : define una lista tipo drop-down</li>
							<li>&lt;button> : define un botón</li>
							<li>&lt;datalist> : define una lista de opciones pre-definidas para un input</li>
							<li>&lt;output> : representa el resultado de un cálculo</li>
						</ul>
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 12*/}
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>¿Qué tanto soporte HTML5 tiene el navegador que utilizas? [16]</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
					Yo utilizo la versión 80 de Google Chrome en Linux y tiene una puntuación de 476/555 puntos en el test de soporte.
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			<br/>
			Sobre el ciclo de vida y desarrollo de los sistemas de información:
			{/*Pregunta 13*/}
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>¿Cuál es el ciclo de vida de los sistemas de información?</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						El ciclo de vida de un sistema de información ocurre en las siguientes etapas [17]:
						<ol>
							<li>Planificación</li>
							<li>Análisis</li>
							<li>Diseño</li>
							<li>Implementación/Desarrollo</li>
							<li>Pruebas</li>
							<li>Instalación o despliegue</li>
							<li>Uso y mantenimiento</li>
						</ol>
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			{/*Pregunta 14*/}
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>¿Cuál es el ciclo de desarrollo de sistemas de información?[18]</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
					El ciclo de desarrollo de un sistema de información depende de que metodología se vaya a seguir.
					<br/>
					Algunas de las metodologías más comunes son: Agile y Lean.
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			<br/>
			Pregunta Lab 7:
			{/*Pregunta lab 7*/}
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>Describe Material design</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						Material design es un lenguaje de diseño creado por Google que intenta imitar lo más posible objetos reales en interfaces gráficas. 
						Esto se logra con efectos 3D, iluminación realista y animaciones.[19] 
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	)
}

export default Preguntas;