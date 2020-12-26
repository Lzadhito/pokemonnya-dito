import { useQuery } from '@apollo/client';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import CatchPokemonModal from '../../components/Pokemon/CatchPokemonModal';
// import { Link, useHistory, useParams } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';
import { GET_POKEMONS, GET_SPESIFIC_POKEMON } from '../../graphql/get-pokemon';

const PokemonDetail = () => {
	const router = useRouter();
	const { name: pokemonName } = router.query;
	const [showCatchDialog, setShowCatchDialog] = useState(false);
	const {
		data: { pokemon: { name = '' } = {} } = {},
		loading,
		refetch,
	} = useQuery(GET_SPESIFIC_POKEMON, {
		variables: { name: pokemonName },
	});

	// const [pokemons, setPokemons] = useContext(PokemonContext);
	// const { name } = useParams();
	// const history = useHistory();
	if (loading) return <div>loading...</div>;
	return (
		<div>
			{console.log(name)}
			<Link href='/pokemon'>
				<button style={{ marginLeft: '1rem' }}>
					<a>go to Pokemon List</a>
				</button>
			</Link>
			<p>Pokemon Detail {name}</p>
			<button onClick={() => setShowCatchDialog(true)}>catch!</button>
			<CatchPokemonModal
				pokemon={name}
				open={showCatchDialog}
				onClose={setShowCatchDialog}
			/>
			{/* <p>{JSON.stringify(pokemons)}</p> */}
		</div>
	);
};

export default PokemonDetail;
