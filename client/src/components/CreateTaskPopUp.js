import React from "react";
import '../css/createTaskPopUp.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CreateTaskPopUp(props) {
  const classes = useStyles();
  const handleClick = () => {
   props.toggle();
  };

  const onSubmit = () => {
    if (document.getElementById("taskTitle").value !== "") {
      let newTaskTitle = document.getElementById("taskTitle").value;
      props.callbackToNewTask(newTaskTitle);
      props.toggle()
    } else {
      console.log('nothing entered');
    }
  }

  return (
    <div className="modal">
      <ClickAwayListener onClickAway={props.toggle}>
    <div className="modal_content">
      <span className="close" onClick={handleClick}>
        &times;
      </span>
      <form className={classes.form}>
          What is the highest impact thing you can do today?
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="taskTitle"
            name="taskTitle"
            autoFocus
          />
          <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Submit
          </Button>
      </form>
    </div>
    </ClickAwayListener>
  </div>
  );
 }