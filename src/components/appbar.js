import React, {Fragment, useState} from 'react'
import {AppBar, IconButton, Toolbar, Typography,
	InputBase, createStyles, makeStyles, Input} from '@material-ui/core'
import {Menu, DateRange} from '@material-ui/icons'
const useAppbarStyle = makeStyles((theme)=>createStyles({
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch'
			}
		}
	}
}))


export default function AppbarC({handleDrawerState, handleDatepicker}) {
	const appbarStyle = useAppbarStyle()
	return(
		<AppBar color='transparent' elevation={0} style={{flexGrow: 1, padding: '0 5vw'}}>
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerState}
				>
					<Menu />
				</IconButton>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={handleDatepicker}
				>
					<DateRange />
				</IconButton>
				<div style={{ flexGrow: 1}}>
					<InputBase placeholder='جستوجو ...'

					>
					</InputBase>

				</div>
			</Toolbar>
		</AppBar>
)
}