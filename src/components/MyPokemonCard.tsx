/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Card, Dialog, IconButton, Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const MyPokemonCard = (props) => {
	return (
		<Card
			css={css`
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 0 2vw;
			`}
			key={props.poke.id}
		>
			<Link
				css={css`
					display: flex;
					flex-grow: 1;
					align-items: center;
				`}
				href={`/pokemon/${props.poke.name}`}
			>
				<img
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
					`}
				>
					{props.nickname && (
						<Typography variant='button'>{props.nickname}</Typography>
					)}
					<br />

					<Typography variant='caption'>{props.poke.name}</Typography>
				</div>
			</Link>
			<div>
				<IconButton onClick={props.onClickRemove}>
					<Delete color='disabled' />
				</IconButton>
			</div>
		</Card>
	);
};

export default MyPokemonCard;
