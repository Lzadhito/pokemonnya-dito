import React, { createContext, useState } from 'react';

export const PokemonContext = createContext(null);

export interface Pokemon {
	id: number;
	name: string;
	types: {
		type: {
			name: string;
		};
	};
}

export interface MyPokemon {
	nickname: string;
	pokemon: Pokemon;
}

export const PokemonProvider = (props) => {
	let defaultMyPokemons = {};
	const local =
		typeof window !== 'undefined' && window.localStorage.getItem('myPokemons');
	if (local) defaultMyPokemons = JSON.parse(local);
	const [myPokemons, setMyPokemons] = useState<Object>(defaultMyPokemons);

	const setPokemonsOnStorage = (myPokemons: Object): boolean => {
		setMyPokemons(myPokemons);
		try {
			localStorage.setItem('myPokemons', JSON.stringify(myPokemons));
			return true;
		} catch (error) {
			return false;
		}
	};

	const addPokemon = (newPokemon: MyPokemon): boolean => {
		const { nickname, pokemon } = newPokemon;
		try {
			if (!myPokemons[nickname]) {
				let newMyPokemons = { ...myPokemons };
				newMyPokemons[nickname] = pokemon;
				setPokemonsOnStorage(newMyPokemons);
				return true;
			}
			return false;
		} catch (error) {
			return false;
		}
	};

	const removePokemon = (nickname: string): boolean => {
		try {
			if (myPokemons[nickname]) {
				let newMyPokemons = { ...myPokemons };
				delete newMyPokemons[nickname];
				setPokemonsOnStorage(newMyPokemons);
				return true;
			}
			return false;
		} catch (error) {
			return false;
		}
	};

	const countPokemons = (): number => {
		let result = 0;
		for (let _ in myPokemons) {
			result++;
		}
		return result;
	};

	return (
		<PokemonContext.Provider
			value={{ myPokemons, addPokemon, removePokemon, countPokemons }}
		>
			{props.children}
		</PokemonContext.Provider>
	);
};
