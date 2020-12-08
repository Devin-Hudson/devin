import React from 'react'
import {Menu} from '@material-ui/icons'
import {IconButton} from '@material-ui/core'

export default function MenuComponent({drawer}) {
	const [drawerState, handleDrawerState] = drawer
	return (
		<IconButton
			edge="start"
			color="inherit"
			aria-label="open drawer"
			onClick={(event)=> handleDrawerState(!drawerState)}
		>
			<Menu/>
		</IconButton>
	)
}