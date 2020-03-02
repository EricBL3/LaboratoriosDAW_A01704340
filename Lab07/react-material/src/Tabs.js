import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import DescriptionIcon from '@material-ui/icons/Description';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';
import TextField from '@material-ui/core/TextField';
import InfoIcon from '@material-ui/icons/Info';

import Navbar from './navbar';
import MediaCard from './card';
import FormButton from './FormButton';

function TabPanel(props)
{
	const {children, value, index, ...other} = props;
	return (
		<Typography
		  component="div"
		  role="tabpanel"
		  hidden={value !== index}
		  id={`simple-tabpanel-${index}`}
		  aria-labelledby={`simple-tab-${index}`}
		  {...other}
		>
		  {value === index && <Box p={3}>{children}</Box>}
		</Typography>
	  );
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};


function a11yProps(index) {
	return {
	  id: `simple-tab-${index}`,
	  'aria-controls': `simple-tabpanel-${index}`,
	};
  }

const useStyles = makeStyles(theme =>({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			
		  },
		flexGrow: 1,
		width: "100%",
	},
}));

export default function IconLabelTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
  
	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};
  
	return (
		<div className={classes.root}>
		<AppBar color="default" position="sticky">
			<Tabs
		  value={value}
		  onChange={handleChange}
		  variant="fullWidth"
		  indicatorColor="primary"
		  textColor="primary"
		  aria-label="icon label tabs example"
		  variant="fullWidth"
          scrollButtons="on"
		  centered
		>
		  <Tab icon={<FaceIcon />} label="Proyectos y Aficiones" {...a11yProps(0)} />
		  <Tab icon={<DescriptionIcon />} label="Descripciones" {...a11yProps(1)} />
		  <Tab icon={<QuestionAnswerIcon />} label="Preguntas" {...a11yProps(2)} />
		  <Tab icon={<FormatListNumberedIcon />} label="Referencias" {...a11yProps(3)} />
		  <Tab icon={<InfoIcon />} label="Forma" {...a11yProps(4)} />
		</Tabs>
		</AppBar>
		<TabPanel value={value} index={0}>
		{/*PROYECTOS Y AFICIONES*/ }
			<Navbar />
			<Button variant="outlined" color="primary">
			<Bookmarks></Bookmarks>
			</Button> <br/>
			
			<MediaCard />
			
			<MediaCard /><MediaCard /><MediaCard /><MediaCard /><MediaCard />
		</TabPanel>
		<TabPanel value={value} index={1}>
			{/*DESCRIPCIONES*/ }
			<Navbar />
		</TabPanel>
		<TabPanel value={value} index={2}>
			{/*PREGUNTAS*/ }
			<Navbar />
		</TabPanel>
		<TabPanel value={value} index={3}>
			{/*REFERENCIAS*/ }
			<Navbar />
		</TabPanel>	
		<TabPanel value={value} index={4}>
			{/*FORMA*/ }
			<Navbar />
			<div>
				<TextField placeholder="Escribe tu nombre..." 
				
				label="Nombre" />
				<TextField placeholder="Escribe tu apellido..." 
				label="Apellido" />
			</div>
			
			<br/>
			<TextField placeholder="Escribe tus sugerencias..."
			label="Sugerencias"
			multiline
			fullWidth
			rows="10" />
			<FormButton />
		</TabPanel>			
		</div>

	);
  }