import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Input,
	Slide,
	TextField,
} from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { PokemonContext, MyPokemon } from '../../context/PokemonContext';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const CatchPokemonModal = (props) => {
	const [nickname, setNickname] = useState('');
	const { addPokemon } = useContext(PokemonContext);

	const catchPokemon = (event) => {
		event.preventDefault();
		const newMyPokemon: MyPokemon = {
			nickname,
			pokemon: props.pokemon,
		};
		if (addPokemon(newMyPokemon)) {
			alert(`${nickname} has been catch!`);
			handleClose();
		} else alert('failed to catch pokemon: nickname already exists');
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
						Catch!
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};

export default CatchPokemonModal;
