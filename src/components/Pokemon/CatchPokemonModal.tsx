import { Button, Dialog, Input } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { PokemonContext, MyPokemon } from '../../context/PokemonContext';

const CatchPokemonModal = (props) => {
	const [nickname, setNickname] = useState('');
	const [myPokemons, addPokemon] = useContext(PokemonContext);

	const catchPokemon = () => {
		const newMyPokemon: MyPokemon = {
			nickname,
			pokemon: props.pokemon,
		};
		if (addPokemon(newMyPokemon)) alert(`${nickname} has been catch!`);
		else alert('failed to catch pokemon');
	};

	return (
		<Dialog
			onBackdropClick={() => props.onClose(false)}
			onClose={() => props.onClose(false)}
			open={props.open}
		>
			<div>{`give nickname:`}</div>
			<Input onChange={(event) => setNickname(event.target.value)} />
			<Button onClick={catchPokemon}>catch pokemon!</Button>
		</Dialog>
	);
};

export default CatchPokemonModal;
