/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ButtonBase, Card, IconButton, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import Link from 'next/link';

const MyPokemonCard = (props) => {
	return (
		<Card key={props.poke.id}>
			<ButtonBase
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
					<IconButton onClick={props.onClickRemove}>
						<Delete color='disabled' />
					</IconButton>
				</div>
			</ButtonBase>
		</Card>
	);
};

export default MyPokemonCard;
