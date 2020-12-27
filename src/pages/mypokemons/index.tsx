import Link from 'next/link';
import React, { useContext } from 'react';
import PokemonCard from '../../components/PokemonCard';
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
				<div>
					<PokemonCard poke={pokemon} nickname={nickname} />
					<button style={{ marginLeft: '1rem' }} onClick={removePoke}>
						remove
					</button>
				</div>
			);
			pokemonsList.push(row);
		}

		return pokemonsList;
	};

	return (
		<div>
			<Link href='/pokemon'>
				<button style={{ marginLeft: '1rem' }}>
					<a>go to Pokemon List</a>
				</button>
			</Link>
			{generateListPokemons(myPokemons)}
		</div>
	);
};

export default MyPokemons;
