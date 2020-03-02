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
							<ListItemText primary="https://www.verisign.com/en_US/website-presence/online/what-is-a-url/index.xhtml" />
							<a target="_blank" href="https://www.verisign.com/en_US/website-presence/online/what-is-a-url/index.xhtml"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types" />
							<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://developer.mozilla.org/es/docs/Web/HTTP/Status" />
							<a target="_blank" href="https://developer.mozilla.org/es/docs/Web/HTTP/Status"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="Flavio Copes, The HTML HandBook, 2019" />
						
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
							<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://www.php.net/manual/en/intro-whatis.php" />
							<a target="_blank" href="https://www.php.net/manual/en/intro-whatis.php"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://www.tutorialspoint.com/jsp/index.htm" />
							<a target="_blank" href="https://www.tutorialspoint.com/jsp/index.htm"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://www.keycdn.com/support/ajax-programming" />
							<a target="_blank" href="https://www.keycdn.com/support/ajax-programming"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://www.geeksforgeeks.org/whats-difference-internet-web/" />
							<a target="_blank" href="https://www.geeksforgeeks.org/whats-difference-internet-web/"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://www.oscarblancarteblog.com/2018/12/03/metodos-http-rest/" />
							<a target="_blank" href="https://www.oscarblancarteblog.com/2018/12/03/metodos-http-rest/"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://www.tutorialspoint.com/html5/html5_deprecated_tags.htm" />
							<a target="_blank" href="https://www.tutorialspoint.com/html5/html5_deprecated_tags.htm"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://htmlreference.io/tables/" />
							<a target="_blank" href="https://htmlreference.io/tables/"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables" />
							<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://www.w3schools.com/html/html_form_elements.asp" />
							<a target="_blank" href="https://www.w3schools.com/html/html_form_elements.asp"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="http://html5test.com/" />
							<a target="_blank" href="http://html5test.com/"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://www.keycdn.com/support/ajax-programming" />
							<a target="_blank" href="https://www.keycdn.com/support/ajax-programming"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://www.teamnet.com.mx/blog/ciclo-de-vida-de-los-sistemas-de-computo" />
							<a target="_blank" href="https://www.teamnet.com.mx/blog/ciclo-de-vida-de-los-sistemas-de-computo"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://bus206.pressbooks.com/chapter/chapter-10-information-systems-development/" />
							<a target="_blank" href="https://bus206.pressbooks.com/chapter/chapter-10-information-systems-development/"><LinkIcon /></a>
						</ListItem>
					</li>
					<li>
						<ListItem divider button >
							<ListItemText primary="https://www.interaction-design.org/literature/topics/material-design" />
							<a target="_blank" href="https://www.interaction-design.org/literature/topics/material-design"><LinkIcon /></a>
						</ListItem>
					</li>

				</ol>
			</List>
		</div>
	)
}

export default Referencias;