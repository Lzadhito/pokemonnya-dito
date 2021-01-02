import App from 'next/app';
import type { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
} from '@apollo/react-hooks';
import '../styles/globals.css';
import { PokemonProvider } from '../context/PokemonContext';
import PokeAppBar from '../components/PokeAppBar';
import {
	createMuiTheme,
	MuiThemeProvider,
	StylesProvider,
} from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: 'rgb(50,50,50)',
		},
		secondary: {
			main: red[500],
		},
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	const client = new ApolloClient({
		uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
		cache: new InMemoryCache(),
	});

	return (
		<ApolloProvider client={client}>
			<PokemonProvider>
				<Head>
					<meta charSet='utf-8' />
					<meta http-equiv='X-UA-Compatible' content='IE=edge' />
					<meta
						name='viewport'
						content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes'
					/>
					<meta name='description' content='Description' />
					<meta name='keywords' content='Keywords' />
					<meta name='mobile-web-app-capable' content='yes' />
					<meta
						name='apple-mobile-web-app-title'
						content='Play Pokemonnya Dito!'
					/>
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='default'
					/>
					<meta name='msapplication-navbutton-color' content='white' />
					<meta name='application-name' content='Pokemonnya Dito' />
					<meta name='msapplication-tooltip' content='Tooltip Text' />
					<meta name='msapplication-starturl' content='/' />
					<meta name='msapplication-tap-highlight' content='no' />
					<meta name='full-screen' content='yes' />
					<meta name='browsermode' content='application' />
					<meta name='nightmode' content='enable/disable' />
					<meta name='imagemode' content='force' />
					<meta name='screen-orientation' content='portrait' />
					<title>Play Pokemonnya Dito!</title>
					<link rel='manifest' href='/manifest.json' />
					<meta name='background-color' content='#FFFFFF' />
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon-16x16.png'
					/>
					<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
					<meta name='msapplication-TileColor' content='#da532c' />
					<meta name='theme-color' content='#ffffff' />

					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
					/>
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/icon?family=Material+Icons'
					/>
				</Head>
				<StylesProvider injectFirst>
					<MuiThemeProvider theme={theme}>
						<PokeAppBar />
						<div style={{ margin: '3vh 0' }}>
							<Component {...pageProps} />
						</div>
					</MuiThemeProvider>
				</StylesProvider>
			</PokemonProvider>
		</ApolloProvider>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext: AppContext) => {
	// calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps };
};

export default MyApp;
