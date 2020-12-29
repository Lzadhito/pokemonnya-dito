import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
	Snackbar,
	TextField,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import Alert from '@material-ui/lab/Alert';
import React, { useContext, useState } from 'react';
import { PokemonContext, MyPokemon } from '../../context/PokemonContext';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & { children?: React.ReactElement<any, any> },
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const CatchPokemonModal = (props) => {
	const [nickname, setNickname] = useState('');
	const [snackbar, setSnackbar] = useState(false);
	const [snackbarText, setSnackbarText] = useState('Something wrong happened');
	const { addPokemon } = useContext(PokemonContext);

	const catchPokemon = (event) => {
		event.preventDefault();
		const newMyPokemon: MyPokemon = {
			nickname,
			pokemon: props.pokemon,
		};
		if (addPokemon(newMyPokemon)) {
			setSnackbar(true);
			setSnackbarText('Successfully catch pokemon');
			handleClose();
		} else {
			setSnackbar(true);
			setSnackbarText('Nickname already exists');
		}
	};

	const handleClose = () => {
		props.onClose(false);
	};

	const changeNickname = (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	): void => {
		setNickname(event.target.value);
	};
	return (
		<div>
			<Dialog
				TransitionComponent={Transition}
				onBackdropClick={handleClose}
				onClose={handleClose}
				open={props.open}
			>
				<DialogTitle id='alert-dialog-slide-title'>
					{'You successfuly catch the pokemon!'}
				</DialogTitle>
				<form onSubmit={catchPokemon}>
					<DialogContent>
						<DialogContentText id='alert-dialog-slide-description'>
							Give nickname to your new pokemon.
						</DialogContentText>
						<TextField
							autoFocus
							margin='dense'
							id='nickname'
							label='Nickname'
							type='text'
							onChange={changeNickname}
							required
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button variant='contained' onClick={handleClose} color='secondary'>
							Cancel
						</Button>
						<Button variant='contained' type='submit' color='primary'>
							Submit
						</Button>
					</DialogActions>
				</form>
			</Dialog>
			<Snackbar
				open={snackbar}
				autoHideDuration={3000}
				onClose={() => setSnackbar(false)}
			>
				<Alert
					onClose={() => setSnackbar(false)}
					severity={snackbarText.includes('Successfully') ? 'success' : 'error'}
				>
					{snackbarText}
				</Alert>
			</Snackbar>
		</div>
	);
};

export default CatchPokemonModal;

export const config = { amp: true };
