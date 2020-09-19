import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/';
import { Container } from '@material-ui/core/';
import { Typography } from '@material-ui/core/';
import { Link } from '@material-ui/core/';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Follow me on '}
      <Link color="inherit" href="https://twitter.com/evanjkiser">
        Twitter @EvanJKiser
      </Link>
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
