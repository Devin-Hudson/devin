import React, {Fragment, useState} from 'react'
import {ReactSVG} from 'react-svg'
import {useSpring, animated, config,useTrail} from 'react-spring'
// import clsx from 'clsx'
//material ui components
import {createStyles, Grid, makeStyles, Typography, Box, IconButton, Button, Divider, duration} from '@material-ui/core'
import {Card, CardMedia, CardActionArea, CardContent, CardActions, Collapse} from '@material-ui/core'
// import {Theme as theme} from '@material-ui/core/styles'
// import {Telegram, Email, Favorite, Share, ExpandMore} from '@material-ui/icons'
// import Eitaa from '../assets/Eitaa-Logo.svg'
// import Soroush from '../assets/Soroush-Logo.svg'
//component
import DrawerC from '../components/drawer'
import AppbarC from '../components/appbar'
import PersianDatePicker from '../components/persianDatePicker'
//content
import background from '../assets/background.mp4'
import logo from '../assets/logo.svg'
import img from '../assets/images/AgEEPi3.jpg'
//console.log(theme)
const useBackgroundStyle = makeStyles((theme)=>createStyles({
	root:{
		width: '100%',
		height: '100%',
		overflowX: 'hidden'
	},
	[theme.breakpoints.down('md')]:{
		root:{
			width: `${window.screen.width} - 30px`,
			height: window.screen.height,
			objectFit: 'cover',
			objectPosition: '20% 0%',
			overflowX: 'hidden',
			overflowY: 'hidden'
		},
		heroLogo:{
			width: `${window.screen.width} - 30px`,
			height: '300px',
			margin: '25px'
		},

	},
	middleWrapper:{
		display: 'flex',
		position: 'absolute',
		flexFlow: 'column nowrap',
		alignItems: 'center',
		justifyContent: 'center',
		top: '30%',

	},
	heroLogo:{
		width: '350px',
		height: '300px',
		margin: '0px'
	},
	heroText:{
		color: '#aa2ac0',
		fontWeight: 400
	},
	heroContact:{
		marginTop: '15px',
		color: '#f1b109',
		textShadow: '1px 3px 6px rgba(206,182,0,0.96)'
	}
}))
const useSectionStyle = makeStyles((theme)=>createStyles({
	root: {
		display: 'flex',
		marginTop: '10px',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
		overflowY: 'hidden',
		direction: 'column'
	},
	card:{

	},
	cardImage:{
		objectFit: 'cover',
		objectPosition: '20% 30%',
	}
}))

const useCardStyle = makeStyles((theme)=>createStyles({
	root:{

	},
	expandOpen:{
		transform: 'rotate(180deg)'
	}
}))

export default function () {
	//consts
	const xs = 12;
	const md = 5;
	const heroText = 'Shape What FUTURE Holds'.split(' ')
	//states
	const [drawerState, handleDrawerState] = useState(false)
	const [datepickerState, handleDatepicker] = useState(false)
	const [expanded, setExpanded] = useState(false)
	//styles and animation
	const backgroundStyle = useBackgroundStyle()
	const sectionStyle = useSectionStyle()
	const cardStyle = useCardStyle()
	const {o, xyz} = useSpring({
		from:{o:0, xyz: [0,+100,0]},
	 	o: 1,
		xyz: [0,0,0],
		delay: 1500
	})
	const heroTextTrail = useTrail(heroText.length,{
		from:{o:0, xyz: [0,+100,0], height: 0},
		o: 1,
		xyz: [0,0,0],
		height: 80,
		delay: 2500
	})

	return(
		<Fragment>
			<AppbarC handleDrawerState={handleDrawerState} handleDatepicker={handleDatepicker} />
			<video autoPlay='autoplay' muted loop id="myVideo" className={backgroundStyle.root}>
				<source src={background} type="video/mp4" />
			</video>
			<Grid
				container
				className={backgroundStyle.middleWrapper}>

					<animated.img src={logo} alt='logo' className={backgroundStyle.heroLogo}
								  style={{
								  	opacity: o.interpolate((o)=>`${o}`),
								  	transform: xyz.interpolate((x, y, z) => `translate3d(${x}px,${y}px,${z}px)`)
										  }} />
										  
					<Typography component='h1' className={backgroundStyle.heroText}>
						{heroTextTrail.map(({o, xyz, height}, currentIndex)=>(
							<animated.span key={currentIndex}
										   style={{
											   height,
											   opacity: o.interpolate((o)=>`${o}`),
											   transform: xyz.interpolate((x, y, z) => `translate3d(${x}px,${y}px,${z}px)`),
											   display: 'inline-block'
										   }}>

									{`${heroText[currentIndex]} `}

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
			{/*section*/}
			<Grid container className={sectionStyle.root}>
				<Grid item xs={xs} md={md} className={sectionStyle.card} style={{position: 'sticky'}}>
					<Typography component='h2' style={{color: 'black'}}>
						Title Provided by the Admin
					</Typography>
				</Grid>
				<Grid item xs={xs} md={md} className={sectionStyle.card}>
					<Card className={sectionStyle.card} elevation={5}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								src={img}
								title="Contemplative Reptile"
								className={sectionStyle.cardImage}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2" style={{color: 'black'}}>
									Lizard
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
									across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary" style={{ lineHeight: '2'}}>
								Share
							</Button>
							<Button size="small" color="primary" style={{ lineHeight: '2'}}>
								Learn More
							</Button>
						</CardActions>
					</Card>
					<Card className={sectionStyle.card} elevation={5}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								src={img}
								title="Contemplative Reptile"
								className={sectionStyle.cardImage}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2" style={{color: 'black'}}>
									Lizard
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
									across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary" style={{ lineHeight: '2'}}>
								Share
							</Button>
							<Button size="small" color="primary" style={{ lineHeight: '2'}}>
								Learn More
							</Button>
						</CardActions>
					</Card><Card className={sectionStyle.card} elevation={5}>
					<CardActionArea>
						<CardMedia
							component="img"
							alt="Contemplative Reptile"
							height="140"
							src={img}
							title="Contemplative Reptile"
							className={sectionStyle.cardImage}
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2" style={{color: 'black'}}>
								Lizard
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
								across all continents except Antarctica
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary" style={{ lineHeight: '2'}}>
							Share
						</Button>
						<Button size="small" color="primary" style={{ lineHeight: '2'}}>
							Learn More
						</Button>
					</CardActions>
				</Card>
					<Card className={sectionStyle.card} elevation={5}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								src={img}
								title="Contemplative Reptile"
								className={sectionStyle.cardImage}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2" style={{color: 'black'}}>
									Lizard
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
									across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary" style={{ lineHeight: '2'}}>
								Share
							</Button>
							<Button size="small" color="primary" style={{ lineHeight: '2'}}>
								Learn More
							</Button>
						</CardActions>
					</Card>

					{/*add cards not its grid*/}
				</Grid>
			</Grid>
			<PersianDatePicker state={datepickerState} handleDatepicker={handleDatepicker}/>
			<DrawerC state={drawerState} handleDrawerState={handleDrawerState} />
		</Fragment>
	)
}
