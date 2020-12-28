import App from 'next/app';
import type { AppProps, AppContext } from 'next/app';
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
} from '@apollo/react-hooks';
import '../styles/globals.css';
import { PokemonProvider } from '../context/PokemonContext';
import Head from 'next/head';
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
