import {createStyles, makeStyles} from '@material-ui/core'

const useSectionBStyle = makeStyles((theme) => createStyles({
	root: {
		display: 'flex',
		position: 'relative',
		borderRadius: '7px',
		boxShadow: '0px 0px 16px 0px rgba(0,0,0,0.75)',
		marginTop: '-160px',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
		overflowY: 'hidden',
		backgroundColor: 'white',
		minHeight: '100vh',
		zIndex: theme.zIndex.drawer
	},
	title:{
		color: 'black',
		textAlign: 'center'
	},
	container:{
		marginTop: '100px'
	},
	card: {},
	cardImage: {
		objectFit: 'cover',
		objectPosition: '20% 30%',
	},
}))

export default useSectionBStyle