import React from 'react'
import {IconButton} from '@material-ui/core'
import DoubleArrow from '@material-ui/icons/DoubleArrow'
import {makeStyles,createStyles} from '@material-ui/core/styles'

const useGoDownStyle = makeStyles(theme=> createStyles({
		positioning: {
			display: 'flex',
			marginTop: '0px',
			zIndex: theme.zIndex.drawer+3,
			transform: `rotate(90deg)`,
			color: ''
		}
}))

export default function GoDown() {
	const goDownStyle = useGoDownStyle()
	return(
		<IconButton aria-label="KeyboardArrowDown" className={goDownStyle.positioning}>
			<DoubleArrow fontSize="large" />
		</IconButton>
	)
}