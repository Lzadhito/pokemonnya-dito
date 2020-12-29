/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import PokeBallIcon from '../assets/icons/pokeball.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronLeft } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
	})
);

const PokeAppBar = () => {
	const classes = useStyles();
	const router = useRouter();
	const isMobile = useMediaQuery({ maxWidth: 600 });

	const pathname = router.pathname;
	const isMainPage = pathname === '/pokemon';

	return (
		<div className={classes.root}>
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
								<IconButton>
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
								<h5
									css={css`
										display: inline;
										cursor: pointer;
									`}
								>
									My Pokemons
								</h5>
							)}
							<IconButton color='inherit'>
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
