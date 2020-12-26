import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { GET_POKEMONS, GET_SPESIFIC_POKEMON } from '../../graphql/get-pokemon';
import { PokemonContext } from '../../context/PokemonContext';

const PokemonsList = () => {
	const limit = 3;
	const [pokemonOffset, setPokemonOffset] = useState(1);
	const [pokemons, setPokemons] = useContext(PokemonContext);

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

	if (loading) return <div>loading...</div>;
	return (
		<div>
			{results.map((poke) => (
				<div
					style={{ display: 'flex', direction: 'row', marginBottom: '1rem' }}
				>
					<p>{JSON.stringify(poke.name)}</p>
					<Link href={`/pokemon/${poke.name}`}>
						<button style={{ marginLeft: '1rem' }}>
							<a>go to {poke.name}</a>
						</button>
					</Link>
				</div>
			))}
			{previous && (
				<button
					onClick={() => previous && setPokemonOffset(pokemonOffset - limit)}
				>
					previous
				</button>
			)}
			{next && (
				<button onClick={() => next && setPokemonOffset(pokemonOffset + limit)}>
					next
				</button>
			)}
			<button
				onClick={() => {
					setPokemons((old) => [...old, old.length + 1]);
				}}
			>
				{JSON.stringify(pokemons)}
			</button>
		</div>
	);
};

export default PokemonsList;
