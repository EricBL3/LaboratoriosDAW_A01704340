import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import marvel from './images/marvel.jpeg';
import coding from './images/coding.jpeg';
import videogames from './images/videogames.jpeg';
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
	  width: 500,
	  height: 450,
	},
	icon: {
	  color: 'rgba(255, 100, 100, 0.7)',
	},
  }));

const tileData = [
	{
		img: videogames,
		title: "Videojuegos",
	},
	{
		img: coding,
		title: "Programar",
	},
	{
		img: marvel,
		title: "Marvel",
		cols: 2,
		rows: 2,
	}
];

const Aficiones = () =>{
	const classes = useStyles();

	return (
		<div className={classes.root}>
		  <GridList  cellHeight={180} className={classes.gridList}>
			<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
			  <ListSubheader component="div">Aficiones</ListSubheader>
			  <Divider />
			</GridListTile>
			{tileData.map(tile => (
			  <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
				<img src={tile.img} alt={tile.title} />
				<GridListTileBar
				  title={tile.title}
				  actionIcon={
					<IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
					  <FavoriteTwoToneIcon />
					</IconButton>
				  }
				/>
			  </GridListTile>
			))}
		  </GridList>
		</div>
	  );
}

export default Aficiones;