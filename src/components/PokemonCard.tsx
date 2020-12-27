import { Link } from '@material-ui/core';
import React from 'react';

const PokemonCard = (props) => {
	return (
		<div key={props.poke.id} style={{ display: 'flex', marginBottom: '1rem' }}>
			<img src={props.poke.image || props.poke.sprites.front_default} />
			{props.nickname && (
				<p>
					{props.nickname}
					&#10;&#13;
				</p>
			)}

			<p>{props.poke.name}</p>
			<Link href={`/pokemon/${props.poke.name}`}>
				<button style={{ marginLeft: '1rem' }}>
					<a>go to {props.poke.name}</a>
				</button>
			</Link>
		</div>
	);
};

export default PokemonCard;
