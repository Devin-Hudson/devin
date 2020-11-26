import React from 'react'
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from '@material-ui/core'
import img from '../assets/images/AgEEPi3.jpg'
import useSectionBStyle from '../styles/useSectionBStyle'

export default function SectionB() {
	const xs = 12;
	const md = 5;
	const sectionStyle = useSectionBStyle()
	return (
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
								Lizards are a widespread group of squamate reptiles, with over 6,000 species,
								ranging
								across all continents except Antarctica
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary" style={{lineHeight: '2'}}>
							Share
						</Button>
						<Button size="small" color="primary" style={{lineHeight: '2'}}>
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
								Lizards are a widespread group of squamate reptiles, with over 6,000 species,
								ranging
								across all continents except Antarctica
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary" style={{lineHeight: '2'}}>
							Share
						</Button>
						<Button size="small" color="primary" style={{lineHeight: '2'}}>
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
					<Button size="small" color="primary" style={{lineHeight: '2'}}>
						Share
					</Button>
					<Button size="small" color="primary" style={{lineHeight: '2'}}>
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
								Lizards are a widespread group of squamate reptiles, with over 6,000 species,
								ranging
								across all continents except Antarctica
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary" style={{lineHeight: '2'}}>
							Share
						</Button>
						<Button size="small" color="primary" style={{lineHeight: '2'}}>
							Learn More
						</Button>
					</CardActions>
				</Card>

				{/*add cards, not its grid*/}
			</Grid>
		</Grid>
	)
}
