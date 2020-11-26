import {createStyles, makeStyles} from '@material-ui/core'

const useSectionBStyle = makeStyles((theme) => createStyles({
	root: {
		display: 'flex',
		marginTop: '10px',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
		overflowY: 'hidden',
		direction: 'column',
	},
	card: {},
	cardImage: {
		objectFit: 'cover',
		objectPosition: '20% 30%',
	},
}))

export default useSectionBStyle