import './About.css'
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles }from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import womanAvatar from "../assets/icon1.svg";
import manAvatar from "../assets/icon2.png";
import bgAbout from "../assets/bg-top.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(to right, #396afc, #0013FE)",
    padding: theme.spacing(4),
    [theme.breakpoints.up("sm")]:{
      padding: `${theme.spacing(8)}px calc(5% + ${theme.spacing(6)}px) ` 
    },

    '& > div':{
      height: "100%"
    }
  },
  sectionTitle: {
    color: theme.palette.background.paper ,
    fontFamily: "Heebo, 'sans-serif'",
    textAlign: "center",
    textTransform: "uppercase",
  },
  content:{
    height: "100%",
    marginTop: theme.spacing(3)
  },
  media: {
    height: 180,
  },
  caption:{
    color: "#0013FE",
    fontWeight: 700,
    fontFamily: "Heebo, 'sans-serif'"
  },
  title:{
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
    fontWeight: 700,
  },
  subtitle:{
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1)
  }
}));

const members = [
  {
    name: "Antonius Dwiputra",
    title: "Full Stack Engineer",
    imageUrl: manAvatar,
    description: "Final year computing and software systems student at the University of Melbourne."
  },
  {
    name: "Ervina Theresa",
    title: "Designer",
    imageUrl: womanAvatar,
    description: "Final year psychology student at the University of Melbourne."
  },
  {
    name: "Tabitha Ayudya",
    title: "Full Stack Engineer",
    imageUrl: womanAvatar,
    description: "Final year computing and software systems student at the University of Melbourne."
  }
];

export default function About() {
  const classes = useStyles();

  return (
    <div>

      <img src={bgAbout} id="bg"/>

      <div className='about'>
        MEET THE TEAM
      </div>

      <div className='teamName'>
        #WeIsCovidFree
      </div>
    
      <Container maxWidth="md">

        <Grid className={classes.content} container spacing={3} justify="center">
          {
            members.map((item, key) => {
              console.log(item)
              return(
                <Grid item xs={4}>
                  <Card key={key} className={classes.card} elevation={2}>
                    <CardMedia
                      className={classes.media}
                      image={item.imageUrl}
                      title="imageurl"
                    />
                    <CardContent>
                      <Typography component="div" gutterBottom>
                        <Box className={classes.caption} fontSize="default">
                          {item.title}
                        </Box>
                        <Box className={classes.title} fontSize="h5.fontSize">
                          {item.name}
                        </Box>
                        <Box className={classes.subtitle} fontSize="default">
                          {item.description}
                        </Box>
                      </Typography>
                    
                    </CardContent>
                  </Card>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </div>
  )
}
