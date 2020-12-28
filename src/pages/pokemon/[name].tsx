/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import CatchPokemonModal from '../../components/Pokemon/CatchPokemonModal';
import { GET_SPESIFIC_POKEMON } from '../../graphql/get-pokemon';
import { Button, Container } from '@material-ui/core';

const PokemonDetail = () => {
	const router = useRouter();
	const { name: pokemonName } = router.query;
	const [showCatchDialog, setShowCatchDialog] = useState(false);
	const [catchFailed, setCatchFailed] = useState(false);
	const { data: { pokemon = {} } = {}, loading } = useQuery(
		GET_SPESIFIC_POKEMON,
		{
			variables: { name: pokemonName },
		}
	);

	const {
		name = '',
		sprites: { front_default = '' } = {},
		moves = [],
		types = [],
	} = pokemon;

	const catchPokemon = (): void => {
		const prob50 = Math.random() >= 0.5;
		if (prob50) {
			setCatchFailed(false);
			setShowCatchDialog(true);
		} else setCatchFailed(true);
	};

	if (loading) return <div>loading...</div>;
	return (
		<Container
			css={css`
				display: flex;
				flex-direction: column;
				align-content: center;
			`}
		>
			<img
				css={css`
					flex: 0;
					object-fit: contain;
				`}
				src={front_default}
			/>
			<p
				css={css`
					text-align: center;
				`}
			>
				{name}
			</p>
			{/* <div>
				<p>
					Moves:
					{moves.map((move) => (
						<div>{move.move.name}</div>
					))}
				</p>
			</div>
			<div>
				<p>
					Types:
					{types.map((type) => (
						<div>{type.type.name}</div>
					))}
				</p>
			</div> */}
			<Button
				css={css`
					background: #f44336;
					color: white;
				`}
				onClick={catchPokemon}
			>
				Catch !
			</Button>
			{catchFailed ? (
				<div>you failed to catch the pokemon :(</div>
			) : (
				<CatchPokemonModal
					pokemon={pokemon}
					open={showCatchDialog}
					onClose={setShowCatchDialog}
				/>
			)}
			{/* <p>{JSON.stringify(pokemons)}</p> */}
		</Container>
	);
};

export default PokemonDetail;
