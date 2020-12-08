import React from 'react'
import {Button, Card, CardActionArea, CardActions,
	CardContent, CardMedia, Typography} from '@material-ui/core'

export default function CustomizedCard({img='', title='no title', text='no text', shareLink='#', learnMoreLink='#'}) {
	//should take img icons and stuff like that
	return(
		<Card elevation={0} style={{margin: '1vw'}}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					height="140"
					title="Contemplative Reptile"
					style={{
						ObjectFit: 'contain',
						objectPosition: '20% 0',
						width: 140,
						margin: '0 auto'
					}}
					src={img}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2"
								style={{
									color: 'black',
									fontFamily: 'Montserrat',
									fontWeight: '400',
									textAlign: 'center'
								}}
					>
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p"
								style={{
									color: 'grey',
									fontFamily: 'Montserrat',
									fontWeight: '400',}}
					>
						{text}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}