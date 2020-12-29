/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ButtonBase, Card } from '@material-ui/core';
import Link from 'next/link';

const PokemonCard = (props: any) => {
	return (
		<Link href={`/pokemon/${props.poke.name}`}>
			<ButtonBase>
				<Card
					css={css`
						// margin: 1vh 0;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width: 140px;
						height: 140px;
						cursor: pointer;
					`}
					key={props.poke.id}
				>
					<img
						css={css`
							width: 100px;
							height: 100px;
							flex: 0;
							object-fit: contain;
						`}
						src={props.poke.image || props.poke.sprites.front_default}
					/>
					<h4
						css={css`
							margin: 0;
						`}
					>
						{props.poke.name}
					</h4>
				</Card>
			</ButtonBase>
		</Link>
	);
};

export default PokemonCard;
