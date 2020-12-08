import React, {useState} from 'react'
import {FormControlLabel, FormGroup, Switch} from '@material-ui/core'

export default function LanguageSwitcher() {
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
	return(
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
	)
}