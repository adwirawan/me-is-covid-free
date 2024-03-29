import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import NormalTimePicker from '../components/TimePicker/NormalTimePicker';
import DisabledTimePicker from '../components/TimePicker/DisabledTimePicker';
import ScrollableFeed from 'react-scrollable-feed';
import './PickTime.css';
import bgPickTime from '../assets/bg-pickTime.jpeg';
import {Link, useParams} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '400px',
  },
}));

export default function PickTime(props) {

  const { siteName } = useParams();

  const classes = useStyles();

  const existing_data1 = props.data1;

  const existing_data2 = props.data2;

  function checkSlot(item) {
    if(item.slot > 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>

      <img src={bgPickTime} id="bg"/>

      <Grid container spacing={3} justifyContent="center" alignItems="center" className="pickTime-container">
        <Grid item xs={12} className='title'>
          <h1>BOOK YOUR APPOINTMENT</h1>
        </Grid>

        <Grid item xs={6} className='sub-title'>
          <h3>Testing centre: {siteName}</h3>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={1} justifyContent="center" alignItems="center">
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <h3 className='day'>TODAY, 22 August 2021</h3>
            </Grid>
            <Grid item xs={3}>
              <h3 className='day'>TOMORROW, 23 August 2021</h3>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <ScrollableFeed>
                  <ul>
                    {existing_data1.map((item, index) => (checkSlot(item)) ?
                      (<li key={index}>
                        <NormalTimePicker data={item} siteName={siteName} day={'Today'}/>
                      </li>) :
                      (<li key={index}>
                        <DisabledTimePicker data={item} />
                      </li>)
                    )}
                  </ul>
                </ScrollableFeed>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>

                <ScrollableFeed>
                  <ul>
                    {existing_data2.map((item, index) => (checkSlot(item)) ?
                      (<li key={index}>
                        <NormalTimePicker data={item} siteName={siteName} day={'Tomorrow'} />
                      </li>) :
                      (<li key={index}>
                        <DisabledTimePicker data={item} />
                      </li>)
                    )}
                  </ul>
                </ScrollableFeed>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

      </Grid>





    </div>
  )
}
