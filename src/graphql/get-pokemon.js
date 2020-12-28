import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
	query pokemons($limit: Int, $offset: Int) {
		pokemons(limit: $limit, offset: $offset) {
			next
			previous
			results {
				url
				name
				image
				id
			}
		}
	}
`;

export const GET_SPESIFIC_POKEMON = gql`
	query pokemon($name: String!) {
		pokemon(name: $name) {
			name
			sprites {
				front_default
			}
			# moves {
			# 	move {
			# 		url
			# 		name
			# 	}
			# }
			# types {
			# 	type {
			# 		name
			# 	}
			# }
		}
	}
`;
