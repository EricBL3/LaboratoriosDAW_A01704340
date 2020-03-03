import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import mario from './images/mario-5.PNG';
import origins from './images/origins.png';
import spaceman from './images/ace-spaceman-6.PNG';
import retro from './images/retro-4.PNG';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
	  display: 'flex',
	  flexWrap: 'wrap',
	  justifyContent: 'space-around',
	  overflow: 'hidden',
	  backgroundColor: theme.palette.background.primary,
	},
	gridList: {
	  width: 800,
	  height: 450,
	},
	icon: {
	  color: 'rgba(255, 255, 255, 0.54)',
	},
  }));

const tileData = [
	{
		img: mario,
		title: "Super Mario MineSweeper",
		cols: 1,
		rows:2,
	},
	{
		img: origins,
		title: "Origins",
		rows:2,
	},
	{
		img: spaceman,
		title: "Ace SpaceMan: Galaxy Explorer",
		rows: 2,
	},
	{
		img: retro,
		title: "Retro Mini Console",
		rows:2,
	},
];

const Proyectos = () =>{
	const classes = useStyles();

	return (
		<div className={classes.root}>
		  <GridList  cellHeight={180} className={classes.gridList}>
			<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
			  <ListSubheader component="div">Proyectos</ListSubheader>
			  <Divider />
			</GridListTile>
			
			{tileData.map(tile => (
			  <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
				<img src={tile.img} alt={tile.title} />
				<GridListTileBar
				  title={tile.title}
				  actionIcon={
					<IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
					  <WorkTwoToneIcon />
					</IconButton>
				  }
				/>
			  </GridListTile>
			))}
		  </GridList>
		</div>
	  );
}

export default Proyectos;