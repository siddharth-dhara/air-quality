import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: 0,
      margin: 0,
    },
    connected: {
      marginRight: 2,
      color: '#4caf50',
    },
    disconnected: {
      marginRight: 2,
      color: '#d9182e',
    },
}));

const StatusIndicator = ({
  status
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FiberManualRecordIcon fontSize="small" className={classes[status]} />
      Websocket Status is currently {status}
    </div>
  );
};

export default StatusIndicator;