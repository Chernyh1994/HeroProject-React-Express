import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Img from '../listHeroes/img/allHeroes.jpg'
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx'
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '80%',
  
    margin:'15px'
  },
  media: {
    height: 140,
  },
  box:{
    display: 'flex',
    alignItems:'flex-start',
    justifyContent:'center',
    width: '100%',
    height: '100vh',
  },
  fab: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function MediaCard(props) {

  const [value, setValue] = React.useState('');

  const [editField,setEditField]= useState('')

  const edit=(field, value)=>{
    setEditField(field)
    setValue(value)
  }

  const save =()=>{
    fetch(`http://localhost:8002/api/heroes/hero/update`,{
      method:'POST',
      headers: {
        "Content-Type": "application/json",
    },
      body:JSON.stringify({
        id: props.match.params.id,
        [editField]: value
      })
    }).then(res=>{
      fetch(`http://localhost:8002/api/heroes/hero/${props.match.params.id}`).then(res => {
      return res.json();
    }).then(json => {
      setHero(json.hero)
      setEditField('')
    })
    })
  }

  const cansel=()=>{
    setEditField('')
  }

  const handleChange = name => event => {
    setValue(event.target.value);
  };

  const deleteHero=()=>{
    fetch(`http://localhost:8002/api/heroes/hero/${props.match.params.id}`,{
      method:'DELETE'
    }).then(res=>{
      window.location.href = "http://localhost:3000"
    })
  }

  const classes = useStyles();

  const [hero, setHero] = useState(null);

  useEffect(() => {

    fetch(`http://localhost:8002/api/heroes/hero/${props.match.params.id}`).then(res => {
      return res.json();
    }).then(json => {
      setHero(json.hero)
    })
  }, []) 


  return (
    <div className={classes.box}>
      {hero && <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={Img}
        />
        <CardContent>
          {
            editField === 'nickname' ? 
            <div className="editBlock">
              <TextField
                label="nickname"
                className={classes.textField}
                value={value}
                onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
              />
              <Button onClick={save} variant="contained" size="small" className={classes.button}>
                <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                Save
              </Button>
              <Button onClick={cansel} variant="contained" size="small" className={classes.button}>
                <CancelIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                Cancel
              </Button>
            </div>
            
          : 
          <Typography gutterBottom variant="h5" component="h2">
            {hero.nickname} 
            <Fab onClick={()=>edit('nickname', hero.nickname)}  size="small" color="secondary" aria-label="edit" className={classes.fab}>
              <EditIcon />
            </Fab>
          </Typography>
          }
          
          {
            editField === 'real_name' ? 
            <div className="editBlock">
              <TextField
                label="real_name"
                className={classes.textField}
                value={value}
                onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
              />
              <Button onClick={save} variant="contained" size="small" className={classes.button}>
                <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                Save
              </Button>
              <Button onClick={cansel} variant="contained" size="small" className={classes.button}>
                <CancelIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                Cancel
              </Button>
            </div>
            
          : 
          <Typography gutterBottom variant="h5" component="h2">
            Реалное Имя: {hero.real_name} 
            <Fab onClick={()=>edit('real_name', hero.real_name)}  size="small" color="secondary" aria-label="edit" className={classes.fab}>
              <EditIcon />
            </Fab>
          </Typography>
          }

          {
            editField === 'origin_description' ? 
            <div className="editBlock">
              <TextField
                label="origin_description​"
                className={classes.textField}
                value={value}
                onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
              />
              <Button onClick={save} variant="contained" size="small" className={classes.button}>
                <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                Save
              </Button>
              <Button onClick={cansel} variant="contained" size="small" className={classes.button}>
                <CancelIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                Cancel
              </Button>
            </div>
            
          : 
         <>
          <Typography gutterBottom variant="h6" component="h3">
            История.
            <Fab onClick={()=>edit('origin_description', hero.origin_description)}  size="small" color="secondary" aria-label="edit" className={classes.fab}>
              <EditIcon />
            </Fab>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {hero.origin_description} 
          </Typography>
         </>
          }

          {
            editField === 'superpowers' ? 
            <div className="editBlock">
              <TextField
                label="superpowers"
                className={classes.textField}
                value={value}
                onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
              />
              <Button onClick={save} variant="contained" size="small" className={classes.button}>
                <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                Save
              </Button>
              <Button onClick={cansel} variant="contained" size="small" className={classes.button}>
                <CancelIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                Cancel
              </Button>
            </div>
            
          : 
         <>
          <Typography gutterBottom variant="h6" component="h3">
            Способности.
            <Fab onClick={()=>edit('superpowers', hero.superpowers)}  size="small" color="secondary" aria-label="edit" className={classes.fab}>
              <EditIcon />
            </Fab>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {hero.superpowers} 
          </Typography>
         </>
          }

          {
            editField === 'catch_phrase' ? 
            <div className="editBlock">
              <TextField
                label="catch_phrase"
                className={classes.textField}
                value={value}
                onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
              />
              <Button onClick={save} variant="contained" size="small" className={classes.button}>
                <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                Save
              </Button>
              <Button onClick={cansel} variant="contained" size="small" className={classes.button}>
                <CancelIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                Cancel
              </Button>
            </div>
            
          : 
         <>
          <Typography gutterBottom variant="h6" component="h3">
            Крылатая Фраза
            <Fab onClick={()=>edit('catch_phrase', hero.catch_phrase)}  size="small" color="secondary" aria-label="edit" className={classes.fab}>
              <EditIcon />
            </Fab>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            "{hero.catch_phrase} "
          </Typography>
         </>
          }
        </CardContent>
     
      <CardActions>
        <Link to=''><Button size="small" color="primary">
          Back
        </Button></Link>
         <Button size="small" color="primary" onClick={deleteHero}>
          Delete
        </Button>
      </CardActions>
    </Card>
      }
    </div>
  );
}