import React from 'react';
import { Typography, ListItemText, List, ListItem } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';

const Referencias = () => {

	return(
		<div>
			<Typography variant="h5">Referencias:</Typography>
			<List component="ol">
				<ol>
					<li>
						<ListItem divider button>
							<ListItemText primary="https://www.w3schools.com/php/default.asp" />
							<a target="_blank" href="https://www.w3schools.com/php/default.asp"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://medium.com/@jpmorris/how-to-prevent-xss-attacks-by-escaping-output-in-php-942204bf184" />
							<a target="_blank" href="https://medium.com/@jpmorris/how-to-prevent-xss-attacks-by-escaping-output-in-php-942204bf184"><LinkIcon /></a>
						</ListItem>
					</li>
				</ol>
			</List>
		</div>
	)
}

export default Referencias;