import React from 'react'
import { Drawer } from '@material-ui/core'

export default function DrawerC({state, handleDrawerState}) {
	return(
		<React.Fragment>
			<Drawer anchor='left' open={Boolean(state)} onClose={()=>handleDrawerState(false)}>
				<h1>asdad</h1>
			</Drawer>
		</React.Fragment>
	)
}