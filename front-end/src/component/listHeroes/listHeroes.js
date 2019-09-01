import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
//button
import Grid from '@material-ui/core/Grid';
//Heroes_list
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
//pagination
import {Pagination} from 'semantic-ui-react'
const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minWidth: '100vh',
    width: '100%',
  },
  image: {
    position: 'relative',
    height: '45vh',
    margin:'15px',
    [theme.breakpoints.down('xs')]: {
      width: '300px !important', // Overrides inline-style
      height: 300,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));


export default function ButtonBases() {
  const classes = useStyles();

  const [heroes, setHeroes] = useState([]);
  const [count, setCount] = useState(5);

  useEffect(() => {

    fetch('http://localhost:8002/api/heroes/1').then(res => {
      return res.json();
    }).then(json => {
      setHeroes(json.heroes)
      setCount(json.countHeroes)
    })
  }, []) 

  const change =(e,{activePage})=>{
    fetch(`http://localhost:8002/api/heroes/${activePage}`).then(res => {
      return res.json();
    }).then(json => {
      setHeroes(json.heroes)
      setCount(json.countHeroes)
    })
  }

  return (
    <div>
      <div className={classes.root}>
        {heroes.map((hero, index) => (
        <ButtonBase
          focusRipple
          key={index}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '50%',
          }}
        ><Link to={`/Ares/${hero._id}`}>
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${'https://www.pressurekleen.com/wp-content/uploads/2018/04/Superhero-e1525386667265.png'})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {hero.nickname}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
          </Link>
        </ButtonBase>
        
      ))}
           
      </div>  
      <div>  
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {style}
         <Pagination
          onPageChange={change}
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={count/5}
        />
      </Grid>
      
      </div>   
  </div>
    
  )
}
