import {createStyles, makeStyles} from '@material-ui/core'

const useSectionAStyle = makeStyles((theme) => createStyles({
	root: {
		width: '100%',
		height: '100%',
		overflowX: 'hidden',
		marginBottom: '-6px',
	},
	[theme.breakpoints.down('md')]: {
		root: {
			width: `${window.screen.width}`,
			height: window.screen.height,
			objectFit: 'cover',
			objectPosition: '20% 0%',
			overflowX: 'hidden',
			overflowY: 'hidden',
		},
		heroLogo: {
			width: `${window.screen.width}`,
			height: '300px',
			margin: '25px',
		},

	},
	middleWrapper: {
		display: 'flex',
		position: 'absolute',
		flexFlow: 'column nowrap',
		alignItems: 'center',
		justifyContent: 'center',
		top: '30%',

	},
	heroLogo: {
		width: '350px',
		height: '300px',
		margin: '0px',
	},
	heroText: {
		textShadow: `0px 3px 7px rgba(101, 22, 128, 0.78)`,
		color: '#fd67af',
		fontWeight: 10,
		marginTop: '-20px'
	},
	heroContact: {
		marginTop: '15px',
		color: '#f1b109',
		textShadow: '0px 3px 3px rgba(197, 57, 198, 1)',
	},
}))

export default useSectionAStyle