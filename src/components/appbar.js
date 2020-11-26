import React, {useState} from 'react'
import {AppBar, Divider, FormControlLabel, FormGroup, IconButton, InputBase, Switch, Toolbar} from '@material-ui/core'
import {DateRange, Menu} from '@material-ui/icons'
import useAppbarStyle from '../styles/useAppbarStyle'

export default function AppbarC({handleDrawerState, handleDatepicker}) {
	const appbarStyle = useAppbarStyle()
	const [language, setLanguage] = useState({
		state: localStorage.getItem('currentLang') === 'en',
		label: localStorage.getItem('currentLang'),
	})
	const languageChange = (state) => {
		if (state === true) {
			localStorage.setItem('currentLang', 'fa')
		} else {
			localStorage.setItem('currentLang', 'en')
		}
		setLanguage({state: !state, ...{language}});
		document.location.reload()
	}
	return (
		<AppBar color='transparent' elevation={0} style={{flexGrow: 1, padding: '0 5vw'}}>
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerState}
				>
					<Menu/>
				</IconButton>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={handleDatepicker}
				>
					<DateRange/>
				</IconButton>
				<div style={{flexGrow: 1}}>
					<InputBase placeholder='Search'>
					</InputBase>

				</div>
				<Divider/>
				<FormGroup row>
					<FormControlLabel
						control={
							<Switch
								checked={language.state}
								onChange={() => languageChange(language.state)}
								name="language"
								color="primary"
							/>
						}
						label={language.label}
					/>
				</FormGroup>
			</Toolbar>
		</AppBar>
	)
}