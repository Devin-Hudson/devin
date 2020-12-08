import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Link} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Headline from './Headline'
import Telegram from '../assets/icons/telegram.svg'
import Gmail from '../assets/icons/gmail.svg'
import Instagram from '../assets/icons/instagram.svg'
import Whatsapp from '../assets/icons/whatsapp.svg'

const useStyles = makeStyles((theme) => ({
	footer:{
		backgroundColor: 'black',
		margin:'10vh 0 0 0',
		minHeight: '10vw',
		borderTopLeftRadius: '5px',
		borderTopRightRadius: '5px'
	},
	buttons:{
		width: '40px',
		height: '40px',
	},
	icons:{
		margin: '0 auto'
	}
}))

export default function ReachOut() {
	const classes = useStyles()
	return(
		<Box className={classes.footer} justify='space-around'>
			<Grid container>
				<Headline size={4} alignment='center' color='white' margin='10px auto'>
					I'd be more than happy if you had any comment or wanted to start a project with me
				</Headline>
				<Headline size={4} alignment='center' color='white' margin='10px auto'>
					Here's a list of ways you can make contact with me
 				</Headline>
				<Grid item className={classes.icons}>
					<IconButton aria-label="Telegram" >
						<Link href="https://t.me/DevinHudson" >
							<img src={Telegram} className={classes.buttons}/>
						</Link>
					</IconButton>
					<IconButton aria-label="Gmail">
						<Link href="mailto:d3vin.hudson@gmail.com" >
							<img src={Gmail} className={classes.buttons}/>
						</Link>
					</IconButton>
					<IconButton aria-label="Instagram">
						<Link href="#">
							<img src={Instagram} className={classes.buttons}/>
						</Link>
					</IconButton>
					<IconButton aria-label="Whatsapp">
						<Link href="#">
							<img src={Whatsapp} className={classes.buttons}/>
						</Link>
					</IconButton>
				</Grid>
			</Grid>
		</Box>
	)
}