import React from 'react';
import {
  Container,
  makeStyles,
  Toolbar,
  AppBar,
  CssBaseline,
  Avatar,
  Typography,
} from '@material-ui/core';

import AvatarGroup from '@material-ui/lab/AvatarGroup';

import me from './me.jpg';
import js from './js.png';
import NodeJS from './node.png';
import php from './php.png';
import mysql from './mysql.webp';
import react from './React.png';
import jq from './jquery.png';
import laravel from './laravel.svg'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  avatar: {
    margin: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
            <Avatar src={me} alt="Nipu Chakraborty profile picture"  /> &nbsp; Nipu Chakraborty
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography  align="center" color="textPrimary" margin='auto' gutterBottom>
                <img src={me} height="200" width="200" />
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Nipu Chakraborty<br />
              Web Developer<br />
              Bangladesh,Dhaka<br/>
              pro.nipu@gmail.com
            </Typography>

            <Toolbar className={classes.paper}>
              <AvatarGroup>
                <Avatar className={classes.avatar} src={js} alt="Nipu Chakraborty profile picture" />
                <Avatar className={classes.avatar} src={NodeJS} alt="Nipu Chakraborty profile picture" />
                <Avatar className={classes.avatar} src={php} alt="Nipu Chakraborty profile picture" />
                <Avatar className={classes.avatar} src={mysql} alt="Nipu Chakraborty profile picture" />
                <Avatar className={classes.avatar} src={react} alt="Nipu Chakraborty profile picture" />
                <Avatar className={classes.avatar} src={jq} alt="Nipu Chakraborty profile picture" />
                <Avatar className={classes.avatar} src={laravel} alt="Nipu Chakraborty profile picture" />
              </AvatarGroup>
            </Toolbar>

            <Typography>
              Honest -Creative-Pro-active these 3 words I describe myself. I am a LAMP & WAMP Full Stack web
              developer. My skills include agile NodeJS, PHP, Java, C, C++, MySQL, PostgreSQL, MongoDB, HTML, CSS,
              Bootstrap and graphics design. I also have experience with well graphics design and PHP and JavaScript
              popular framework (Laravel, lumen ,cakephp ,Reactjs, expressjs, Adonisjs, CodeIgniter) knowledge.
              Recently, I am working with Nodejs & Reactjs done some project with those frameworks in present
              respected company. I love coding & I want to make things that make a difference. At present My goal is
              write a book on JavaScript and I already write down some topic of it’s here is link JS Coding. I hope this
              book will make a great revolution for JavaScript learner.
            </Typography>
          </Container>
        </div>

      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p" gutterBottom>
          Nipu Chakraborty
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}
