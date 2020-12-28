/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Card, Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';

const PokemonCard = (props) => {
	return (
		<Link href={`/pokemon/${props.poke.name}`}>
			<Card
				css={css`
					// margin: 1vh 0;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 130px;
					height: 130px;
				`}
				key={props.poke.id}
			>
				{/* <CardMedia image={props.poke.image || props.poke.sprites.front_default} /> */}
				<img
					css={css`
						flex: 0;
						object-fit: contain;
					`}
					src={props.poke.image || props.poke.sprites.front_default}
				/>
				<Typography>{props.poke.name}</Typography>
			</Card>
		</Link>
	);
};

export default PokemonCard;
