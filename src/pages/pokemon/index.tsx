import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { GET_POKEMONS, GET_SPESIFIC_POKEMON } from '../../graphql/get-pokemon';
import { PokemonContext } from '../../context/PokemonContext';
import MyPokemons from '../mypokemons';
import PokemonCard from '../../components/PokemonCard';

const PokemonsList = () => {
	const limit = 3;
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

	if (loading) return <div>loading...</div>;
	return (
		<div>
			<div>total mypokemons: {totalPokemons}</div>
			{results.map((poke) => (
				<PokemonCard poke={poke} />
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
			<Link href={`/mypokemons`}>
				<button>
					<a>My Pokemons</a>
				</button>
			</Link>
		</div>
	);
};

export default PokemonsList;
