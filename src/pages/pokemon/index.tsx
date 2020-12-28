/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { useQuery } from '@apollo/client';
import { useContext, useEffect, useState } from 'react';
import { GET_POKEMONS } from '../../graphql/get-pokemon';
import { PokemonContext } from '../../context/PokemonContext';
import PokemonCard from '../../components/PokemonCard';
import {
	Button,
	CircularProgress,
	Container,
	Grid,
	Typography,
} from '@material-ui/core';

const PokemonsList = () => {
	const limit = 7;
	const [pokemonOffset, setPokemonOffset] = useState(1);
	const { countPokemons } = useContext(PokemonContext);

	const {
		data: { pokemons: { results = [], next = '', previous = '' } = {} } = {},
		loading,
		refetch,
	} = useQuery(GET_POKEMONS, {
		variables: { limit, offset: pokemonOffset },
	});

	useEffect(() => {
		refetch();
	}, [pokemonOffset, refetch]);

	const totalPokemons = countPokemons();

	if (loading)
		return (
			<div
				css={css`
					display: flex;
					height: 80vh;
					justify-content: center;
					align-items: center;
				`}
			>
				<CircularProgress />
			</div>
		);
	return (
		<Container>
			<div
				css={css`
					margin: 0 0 3vh 0;
				`}
			>
				<Typography variant='h5'>Catch the Pokemons!</Typography>
				<Typography variant='subtitle2'>
					you have {totalPokemons} pokemons
				</Typography>
			</div>
			<Grid container justify='space-around' spacing={2}>
				{results.map((poke: any) => (
					<Grid key={poke.name} item>
						<PokemonCard poke={poke} />
					</Grid>
				))}
			</Grid>
			<div
				css={css`
					display: flex;
					margin-top: 3vh;
				`}
			>
				<div
					css={css`
						flex: 1;
					`}
				>
					{previous && (
						<Button
							variant='outlined'
							onClick={() =>
								previous && setPokemonOffset(pokemonOffset - limit)
							}
						>
							previous
						</Button>
					)}
				</div>
				<div
					css={css`
						flex: 1;
						display: flex;
						justify-content: flex-end;
					`}
				>
					{next && (
						<Button
							variant='outlined'
							onClick={() => next && setPokemonOffset(pokemonOffset + limit)}
						>
							next
						</Button>
					)}
				</div>
			</div>
		</Container>
	);
};

export default PokemonsList;
