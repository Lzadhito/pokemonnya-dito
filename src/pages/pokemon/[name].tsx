/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import CatchPokemonModal from '../../components/Pokemon/CatchPokemonModal';
import { GET_SPESIFIC_POKEMON } from '../../graphql/get-pokemon';
import {
	Button,
	CircularProgress,
	Container,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemText,
	Paper,
	Snackbar,
	Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const PokemonDetail = () => {
	const router = useRouter();
	const { name: pokemonName } = router.query;
	const [showCatchDialog, setShowCatchDialog] = useState(false);
	const [catchFailed, setCatchFailed] = useState(false);
	const { data: { pokemon = {} } = {}, loading = true } = useQuery(
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
		<Container
			css={css`
				display: flex;
				flex-direction: column;
				align-content: center;
			`}
		>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
					margin: 0 0 3vh 0;
				`}
			>
				<img
					alt={String(pokemonName)}
					width='100px'
					height='100px'
					css={css`
						flex: 0;
						object-fit: contain;
					`}
					src={front_default}
				/>
				<h2
					css={css`
						text-align: center;
					`}
				>
					{name.charAt(0).toUpperCase() + name.slice(1)}
				</h2>
				<Grid container spacing={5} justify='center'>
					{types.map((type) => (
						<Grid key={type.type.name} item>
							<li>{type.type.name}</li>
						</Grid>
					))}
				</Grid>
			</div>
			<div
				css={css`
					margin: 0 0 3vh 0;
				`}
			>
				<Typography variant='h6'>Moves:</Typography>
				<Paper
					css={css`
						max-height: 40vh;
						overflow: auto;
						margin: 1vh 0;
					`}
				>
					<List>
						{moves.map((move) => (
							<div key={move.move.name}>
								<ListItem>
									<ListItemText>{move.move.name}</ListItemText>
								</ListItem>
								<Divider />
							</div>
						))}
					</List>
				</Paper>
			</div>
			<Button
				aria-label='catchPokemonButton'
				accessKey='catchPokemonButton'
				css={css`
					background: #f44336;
					color: white;
				`}
				onClick={catchPokemon}
			>
				Catch !
			</Button>
			{catchFailed ? (
				<Snackbar
					open={catchFailed}
					autoHideDuration={3000}
					onClose={() => setCatchFailed(false)}
				>
					<Alert onClose={() => setCatchFailed(false)} severity='error'>
						You failed to catch the pokemon :( <br />
						Please try again
					</Alert>
				</Snackbar>
			) : (
				<CatchPokemonModal
					pokemon={pokemon}
					open={showCatchDialog}
					onClose={setShowCatchDialog}
				/>
			)}
		</Container>
	);
};

export default PokemonDetail;

// export const config = { amp: true };
