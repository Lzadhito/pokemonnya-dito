/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
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
import { ButtonBase, Card, IconButton, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import Alert from '@material-ui/lab/Alert';
import Link from 'next/link';
import { useState } from 'react';

const MyPokemonCard = (props) => {
	const [showDelDialog, setShowDelDialog] = useState(false);
	const [showSnackbar, setshowSnackbar] = useState(false);
	const closeDelDialog = () => {
		setShowDelDialog(false);
	};
	const removePokemon = () => {
		setshowSnackbar(true);
		setShowDelDialog(false);
		props.onClickRemove();
	};
	return (
		<Card key={props.poke.id}>
			<ButtonBase
				aria-label={`MyPokemonCard/${props.poke.id}`}
				accessKey={`MyPokemonCard/${props.poke.id}`}
				css={css`
					width: 100%;
					display: flex;
					flex-direction: row;
					padding: 0 2vw;
				`}
			>
				<Link href={`/pokemon/${props.poke.name}`}>
					<div
						css={css`
							display: flex;
							flex-grow: 1;
							align-items: center;
						`}
					>
						<img
							alt={props.poke.name}
							width='100px'
							height='100px'
							css={css`
								flex: 0;
								object-fit: contain;
							`}
							src={props.poke.image || props.poke.sprites.front_default}
						/>
						<div
							css={css`
								flex-grow: 1;
								margin-left: 3vw;
								text-align: left;
							`}
						>
							{props.nickname && (
								<Typography variant='button'>{props.nickname}</Typography>
							)}
							<br />

							<Typography variant='caption'>{props.poke.name}</Typography>
						</div>
					</div>
				</Link>
				<div>
					<IconButton
						aria-label='removePokemonClick'
						accessKey='removePokemonClick'
						onClick={() => setShowDelDialog(true)}
					>
						<Delete color='disabled' />
					</IconButton>
				</div>
			</ButtonBase>
			<Dialog
				open={showDelDialog}
				onClose={closeDelDialog}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>{`Remove ${props.nickname} ?`}</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						{props.nickname} will be removed from My Pokemons
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						aria-label='cancelRemove'
						accessKey='cancelRemove'
						onClick={closeDelDialog}
						color='inherit'
					>
						Cancel
					</Button>
					<Button
						aria-label='submitRemove'
						accessKey='submitRemove'
						onClick={removePokemon}
						variant='contained'
						color='secondary'
						autoFocus
					>
						Remove
					</Button>
				</DialogActions>
			</Dialog>
			<Snackbar
				open={showSnackbar}
				autoHideDuration={3000}
				onClose={() => setshowSnackbar(false)}
			>
				<Alert onClose={() => setshowSnackbar(false)} severity='error'>
					{props.nickname} has been removed
				</Alert>
			</Snackbar>
		</Card>
	);
};

export default MyPokemonCard;

export const config = { amp: true };
