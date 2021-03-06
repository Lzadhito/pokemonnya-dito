/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import PokeBallIcon from '../assets/icons/pokeball.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronLeft } from '@material-ui/icons';
import { ButtonBase } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

const PokeAppBar = () => {
	const router = useRouter();
	const isMobile = useMediaQuery({ maxWidth: 600 });

	const pathname = router.pathname;
	const isMainPage = pathname === '/pokemon';

	return (
		<div
			css={css`
				flex-grow: 1;
			`}
		>
			<AppBar position='static'>
				<Toolbar>
					<div
						css={css`
							flex-grow: 1;
							align-items: center;
						`}
					>
						{!isMainPage && (
							<Link href='/pokemon'>
								<IconButton aria-label='back' accessKey='back'>
									<ChevronLeft
										css={css`
											color: white;
										`}
									/>
								</IconButton>
							</Link>
						)}
						<Link href='/pokemon'>
							<button
								aria-label='Homepage'
								accessKey='Homepage'
								css={css`
									letter-spacing: 0.1em;
									background: transparent;
									border: none;
									cursor: pointer;
								`}
							>
								<h2
									css={css`
										text-align: left;
										letter-spacing: 0.1em;
										color: white;
									`}
								>
									Pokemon !
								</h2>
							</button>
						</Link>
					</div>

					<Link href={`/mypokemons`}>
						<div>
							{!isMobile && (
								<ButtonBase
									aria-label='myPokemonDesc'
									accessKey='myPokemonDesc'
									css={css`
										padding: 0 1vw;
										border-radius: 5%;
									`}
								>
									<h5
										css={css`
											display: inline;
											cursor: pointer;
										`}
									>
										My Pokemons
									</h5>
								</ButtonBase>
							)}
							<IconButton
								aria-label='myPokemonNav'
								accessKey='myPokemonNav'
								color='inherit'
							>
								<SvgIcon>
									<PokeBallIcon />
								</SvgIcon>
							</IconButton>
						</div>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default PokeAppBar;

export const config = { amp: true };
