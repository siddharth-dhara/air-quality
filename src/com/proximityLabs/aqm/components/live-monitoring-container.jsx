import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
//import CityRow from './city-row';
import CityCard from './city-card';
import StatusIndicator from './status-indicator';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    maxHeight: '50px',
  },
  toolbar: {
    top: '50%',
    alignItems: 'flex-start',
  },
}));

const getCityRows = (data) =>
  JSON.parse(data).map(city => <CityCard city={city} />);

export const LiveMonitoring = ({
  status,
  data
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="absolute">
        <Toolbar className={classes.toolbar}>
          <StatusIndicator status={status}/>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Typography className={classes.title} variant="h5" noWrap>
        {data ? getCityRows(data) : 'No data found'}
      </Typography>
    </div>
  );
};

export default LiveMonitoring;
