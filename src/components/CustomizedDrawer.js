import React from 'react'
import {Drawer, List, ListItem, ListItemIcon, Divider,ListItemText } from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox'
import MailIcon from '@material-ui/icons/Mail'

const DrawerList = () => (
		<List style={{margin: '0 2vw 0 2vw'}}>
			{['about me', 'skills'].map((text, index) => (
				<ListItem button key={text}>
					<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
					<ListItemText primary={text} />
				</ListItem>
			))}
		</List>
);


export default function DrawerComponent({states}) {
	const [drawerState, handleDrawerState] = states
	return (
		<React.Fragment>
			<Drawer anchor='left' open={Boolean(drawerState)} onClose={() => handleDrawerState(false)}>
				<DrawerList/>
			</Drawer>
		</React.Fragment>
	)
}