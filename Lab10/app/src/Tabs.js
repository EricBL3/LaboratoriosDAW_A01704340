import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from '@material-ui/core/styles';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import InfoIcon from '@material-ui/icons/Info';

import Navbar from './Navbar';
import Preguntas from './Preguntas';


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
	grid: {
		backgroundColor: "aqua",
	}
}));

export default function IconLabelTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
  
	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};
  
	return (
		<div className={classes.root}>
		<AppBar color="primary" position="sticky">
			<Tabs
		  value={value}
		  onChange={handleChange}
		  variant="fullWidth"
		  indicatorColor="secondary"
		  textColor="secondary"
		  aria-label="icon label tabs example"
		  variant="fullWidth"
          scrollButtons="on"
		  centered>
		  <Tab icon={<QuestionAnswerIcon />} label="Preguntas" {...a11yProps(0)} />
		  <Tab icon={<FormatListNumberedIcon />} label="Referencias" {...a11yProps(1)} />
		  <Tab icon={<InfoIcon />} label="Forma" {...a11yProps(2)} />
		</Tabs>
		</AppBar>
		<TabPanel value={value} index={0}>
			{/*PREGUNTAS*/ }
			<Navbar />
			<Preguntas />

 
		</TabPanel>
		<TabPanel value={value} index={1}>
			{/*REFERENCIAS*/ }
			<Navbar />

 
		</TabPanel>	
		<TabPanel value={value} index={2}>
			{/*FORMA*/ }
			<Navbar />

		</TabPanel>			
		</div>

	);
  }