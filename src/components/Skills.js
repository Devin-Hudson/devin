import React from 'react'
import ProgressBar from './ProgressBar'
import Headline from './Headline'
import Grid from '@material-ui/core/Grid'

export default function Skills() {
	return(
		<Grid xs={10} lg={10} style={{margin: '10vh auto'}}>
			<Headline alignment={localStorage.getItem('currentLang')==='en' ? 'left' : 'right'} margin={'0 0 3vh 0'}>
				Skills
			</Headline>
			<Headline alignment={localStorage.getItem('currentLang')==='en' ? 'left' : 'right'} margin={'0 0 3vh 0'} size={3} color='grey'>
				Here's a list of stuff i know about ...
			</Headline>
			<ProgressBar chips={['Frontend','React']} percent={30} style={{margin: '3vh auto'}} />
			<ProgressBar chips={['English']} percent={95} style={{margin: '3vh auto'}} />
			<ProgressBar chips={['CCNA','MCSA','LPIC1']} percent={75} style={{margin: '3vh auto'}} />
		</Grid>
	)
}