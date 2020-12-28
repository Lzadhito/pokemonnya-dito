/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { Container, Grid, Typography } from '@material-ui/core';
import { useContext } from 'react';
import MyPokemonCard from '../../components/MyPokemonCard';
import { PokemonContext } from '../../context/PokemonContext';

const MyPokemons = () => {
	const { myPokemons, removePokemon } = useContext(PokemonContext);

	const generateListPokemons = (myPokemons: Object): any[] => {
		let pokemonsList = [];
		for (let nickname in myPokemons) {
			const pokemon = myPokemons[nickname];
			const removePoke = () => {
				removePokemon(nickname);
			};
			const row = (
				<Grid key={nickname} item>
					<MyPokemonCard
						poke={pokemon}
						nickname={nickname}
						onClickRemove={removePoke}
					/>
				</Grid>
			);
			pokemonsList.push(row);
		}

		return pokemonsList;
	};

	return (
		<Container>
			<Typography variant='h6'>My Pokemons</Typography>
			<Grid
				css={css`
					margin-top: 1vh;
				`}
				container
				direction='column'
				spacing={2}
			>
				{generateListPokemons(myPokemons)}
			</Grid>
		</Container>
	);
};

export default MyPokemons;
