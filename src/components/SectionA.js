import React, {Fragment} from 'react'
import {Grid, Typography} from '@material-ui/core'
import {animated} from 'react-spring'
import background from '../assets/background.mp4'
import logo from '../assets/logo.svg'
import useBackgroundStyle from '../styles/useBackgroundStyle'
import useHeroText from '../animations/useHeroText'
import useLogo from '../animations/useLogo'

export default function SectionA() {
	const heroText = 'This Is My Personal Web'.split(' ')
	const backgroundStyle = useBackgroundStyle()

	const {o, xyz} = useLogo()
	const heroTextTrail = useHeroText(heroText)
	return (
		<Fragment>
			<video autoPlay='autoplay' muted loop id="myVideo" className={backgroundStyle.root}>
				<source src={background} type="video/mp4"/>
			</video>
			<Grid
				container
				className={backgroundStyle.middleWrapper}>

				<animated.img src={logo} alt='logo' className={backgroundStyle.heroLogo}
							  style={{
								  opacity: o.interpolate((o) => `${o}`),
								  transform: xyz.interpolate((x, y, z) => `translate3d(${x}px,${y}px,${z}px)`),
							  }}/>

				<Typography component='h1' className={backgroundStyle.heroText}>
					{heroTextTrail.map(({o, xyz, height}, currentIndex) => (
						<animated.span key={currentIndex}
									   style={{
										   display: 'inline-block',
										   marginRight: '5px',
										   height,
										   opacity: o.interpolate((o) => `${o}`),
										   transform: xyz.interpolate((x, y, z) => `translate3d(${x}px,${y}px,${z}px)`),
									   }}>
							{`${heroText[currentIndex]}`}
						</animated.span>

					))}
				</Typography>

				{/*<Grid className={backgroundStyle.heroContact}>*/}
				{/*	<IconButton style={{ color: '#f1b109'}}>*/}
				{/*	</IconButton>*/}
				{/*	<IconButton style={{ color: '#f1b109'}}>*/}
				{/*		<ReactSVG src={Soroush} />*/}
				{/*	</IconButton>*/}
				{/*	<IconButton style={{ color: '#f1b109'}}>*/}
				{/*		<Telegram />*/}
				{/*	</IconButton>*/}
				{/*	<IconButton style={{ color: '#f1b109'}}>*/}
				{/*		<Email  />*/}
				{/*	</IconButton>*/}
				{/*</Grid>*/}
			</Grid>
		</Fragment>
	)
}