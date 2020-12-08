import React from 'react';
import Home from './screens/Home'
import {CssBaseline} from '@material-ui/core'
import {jssPreset, StylesProvider, ThemeProvider} from '@material-ui/core/styles'
import {create} from 'jss'
import rtl from 'jss-rtl'
import theme from './assets/theme'
const jss = create({plugins: [...jssPreset().plugins, rtl()]})

function App() {

	if (localStorage.getItem('currentLang') === 'en') {
		return (

					<ThemeProvider theme={theme}>
						<CssBaseline/>
						<Home/>
					</ThemeProvider>

		)
	} else {
		return (
			<ThemeProvider theme={theme}>
				<StylesProvider jss={jss}>
					<CssBaseline/>
					<Home/>
				</StylesProvider>
			</ThemeProvider>
		)
	}

}

export default App;
