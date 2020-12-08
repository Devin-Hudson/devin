import React, {useState} from 'react'
import {AppBar, Button, Toolbar} from '@material-ui/core'
import {useMediaQuery, useTheme} from '@material-ui/core'
import SearchBar from './SearchBar'
import CustomizedDivider from './CustomizedDivider'
import LanguageSwitcher from './LangugeSwitcher'
// import DateRangeComponent from './DateRangeComponent'
import MenuComponent from './MenuComponent'

export default function AppbarComponent({states}) {
	const [drawerState, handleDrawerState] = states
	const theme = useTheme()
	const lessThanMd = useMediaQuery(theme.breakpoints.down('md'))
	return (
		<AppBar color='transparent' elevation={0} style={{flexGrow: 1, padding: '0 5vw'}}>
			<Toolbar>
				{
					lessThanMd === true ?
						<MenuComponent drawer={[drawerState, handleDrawerState]} /> : ''
				}
				{/*<DateRangeComponent datePicker={[datePickerState,handleDatePicker]} />*/}
				{
					lessThanMd === false ?
						<React.Fragment>
							<Button color='default' style={{lineHeight: 0}}>about me</Button>
							<Button color='default' style={{lineHeight: 0}}>skills</Button>
						</React.Fragment> : ''
				}
				<SearchBar/>
				<CustomizedDivider/>
				<LanguageSwitcher/>
			</Toolbar>
		</AppBar>
	)
}