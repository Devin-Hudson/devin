import React from 'react'
import {Grid, Container, Typography} from '@material-ui/core'
import useSectionBStyle from '../styles/useSectionBStyle'
import CustomizedCard from './CustomizedCard'
import Headline from './Headline'
import AboutMe from './AboutMe'
import Skills from './Skills'
import EnglishLanguage from '../assets/icons/english-language.svg'
import WebDev from '../assets/icons/coding.svg'
import NetworkAdmin from '../assets/icons/world-grid.svg'
const cards = [
	{
		img: EnglishLanguage,
		title: 'English Tutoring',
		text: "I'm an English tutor/troubleshooter and since I'm a freelancer who also develops web apps and with regard to the COVID-19 pandemic now I'm doing my work online."
	},
	{
		img: WebDev,
		title: 'Web Developing',
		text: "The main thing I do for a living that I also enjoy working on is developing nice-looking web apps."
	},
	{
		img: NetworkAdmin,
		title: 'Network/Server Administrating',
		text: "Linux and Microsoft mid-level administrating and network architecture designing are the ones I happen to be doing as well."
	}
]

export default function SectionB() {
	const xs = 12;
	const md = 4;
	const sectionBStyle = useSectionBStyle()
	return (
		<Container fluid className={sectionBStyle.root}>
			<Grid container className={sectionBStyle.container}>
				<Headline size={1} color='black' margin='0 0 10px 0'>
					three major things i do
				</Headline>
				<Grid container xs={12} md={12}>
					{cards.map(each=>
						<Grid item xs={xs} md={md}>
							<CustomizedCard title={each.title} text={each.text} img={each.img}/>
						</Grid>
					)}
				</Grid>
				<AboutMe/>
				<Skills/>
			</Grid>
		</Container>
	)
}

