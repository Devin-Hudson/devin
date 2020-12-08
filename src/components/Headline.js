import React from 'react'
import {Grid, Box} from '@material-ui/core'

export default function Headline({children, alignment='center', size='1', color='black', margin='0 1vw', upperCase='true'}) {
	return(
		<Grid container justify='space-around'>
			<Grid item xs={12} md={12}>
				<Box
					component={`h${size}`}
					style={{
						color: color,
						textAlign: alignment,
						fontFamily: 'Montserrat',
						fontWeight: '400',
						margin: margin
					}}>
					{ upperCase ? children.toUpperCase() : children}
				</Box>
			</Grid>
		</Grid>
	)
}
