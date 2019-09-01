import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
//style button ADD
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
//style input
import TextField from '@material-ui/core/TextField';
// uploadImgButton
import useSignUpForm from './useSignUpForm';


const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },

  //style button ADD

  fab: {
    margin: '0 auto',  
    display: 'flex',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },

  //style input

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },

  //button upload

  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateHeroModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const signup = () => {
   fetch(`http://localhost:8002/api/heroes/hero`,{
      method:'POST',
      headers: {
        "Content-Type": "application/json",
    },
      body: JSON.stringify({hero: inputs})
   })
  }
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);
  
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  // input



  return (
    <div>
      
      <Fab  color="primary" onClick={handleClickOpen} aria-label="add" className={classes.fab}>
            <AddIcon />
      </Fab>
     
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Add Hero
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <form onSubmit={handleSubmit} className={classes.container}  noValidate autoComplete="off">
          <TextField
            id="nickname"
            label="Nickname"
            style={{ margin: 17 }}
            placeholder="Superman"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
            shrink: true,
            }}
            onChange={handleInputChange}
          />
          <TextField
            id="real_name"
            label="Real Name"
            style={{ margin: 17 }}
            placeholder="Clark Kent"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
            shrink: true,
            }}
            onChange={handleInputChange}
          />
          <TextField
            id="origin_description"
            label="Origin Description"
            style={{ margin: 17 }}
            placeholder="he was born Kal-El on the planet Krypton, before being rocketed to
            Earth…"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
            shrink: true,
            }}
            onChange={handleInputChange}
          />
          <TextField
            id="superpowers"
            label="Superpowers"
            style={{ margin: 17 }}
            placeholder="solar energy absorption and healing factor, solar flare and heat vision,
            solar invulnerability, flight…"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
            shrink: true,
            }}
            onChange={handleInputChange}
          />
          <TextField
            id="catch_phrase"
            label="Catch Phrase"
            style={{ margin: 17 }}
            placeholder="“Look, up in the sky, it's a bird, it's a plane, it's Superman!”"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
            shrink: true,
            }}
            onChange={handleInputChange}
          />
        
          <input
            accept="image/*"
            className={classes.input}
            id="outlined-button-file"
            multiple
            type="file"
            name="myFile"
            onChange={handleInputChange}
          />
          <label htmlFor="outlined-button-file">
            <Button variant="outlined" component="span" className={classes.button}>
              Upload <AddIcon/>
            </Button>
          </label>
          <button>dqwdqwdqw</button>
        </form>
      </Dialog>
    </div>
  );
}