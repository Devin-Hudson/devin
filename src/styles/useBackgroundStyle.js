import {createStyles, makeStyles} from '@material-ui/core'

const useBackgroundStyle = makeStyles((theme) => createStyles({
	root: {
		width: '100%',
		height: '100%',
		overflowX: 'hidden',
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
		color: '#5179ff',
		fontWeight: 400,
	},
	heroContact: {
		marginTop: '15px',
		color: '#f1b109',
		textShadow: '1px 3px 6px rgba(206,182,0,0.96)',
	},
}))

export default useBackgroundStyle