import React from 'react';
import FormButton from './FormButton';
import TextField from '@material-ui/core/TextField';

const Form = () => {

	return(
		<div>
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
		</div>
	)
}

export default Form;