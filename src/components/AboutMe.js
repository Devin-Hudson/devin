import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import Send from '@material-ui/icons/Send'
import Avatar from '@material-ui/core/Avatar'
import Headline from './Headline'
import Aboutme from '../assets/images/aboutme.jpg'
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		margin: '0 auto'
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '50vw'
	},
	content: {
		flex: '1 0 auto',
	},
	avatar:{
		width: '10vw',
		height: '10vw',
		margin: '2vw auto'
	},
	cover: {
		width: 151
	},
	button:{
		lineHeight: 1
	},
	[theme.breakpoints.down('sm')]: {
		avatar:{
			width: '20vw',
			height: '20vw',
			margin: '10vw auto'
		},
	}
}));

export default function AboutMe() {
	const classes = useStyles()
	const theme = useTheme()
	return (
		<Card className={classes.root} elevation={0}>
			<CardMedia
				className={classes.cover}
			>
				<Avatar className={classes.avatar}
						alt="avatar"
						style={{
							ObjectFit: 'cover',
							objectPosition: '20% 0',
						}}
						src={Aboutme} />
			</CardMedia>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Headline size={1} color='black' margin='0 0 10px 0' alignment={localStorage.getItem('currentLang')==='en' ? 'left' : 'right'}>
						It's Devin
					</Headline>
					<Headline upperCase={false} size={3} color='black' margin='0 0 10px 0' alignment={localStorage.getItem('currentLang')==='en' ? 'left' : 'right'}>
						IT engineer, focusing mainly on front-end web development.
						I also do network designing and English tutoring/troubleshooting.
					</Headline>
					<Headline upperCase={false} size={3} color='black' margin='0 0 10px 0' alignment={localStorage.getItem('currentLang')==='en' ? 'left' : 'right'}>
						If you happen to like my work, please feel free to contact me.
					</Headline>
					<ButtonGroup color="secondary" aria-label="outlined secondary button group">
						<Button
							className={classes.button}
							variant="contained"
							color="default"
							startIcon={<CloudDownloadIcon />}
						>
							Download CV
						</Button>
					</ButtonGroup>
				</CardContent>
				<div className={classes.controls}>
				</div>
			</div>
		</Card>
	);
}