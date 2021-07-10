import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    connected: {
      marginRight: '5px',
      color: '#4caf50',
    },
    disconnected: {
      marginRight: '5px',
      color: '#d9182e',
    },
}));

const StatusIndicator = ({
  status
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <FiberManualRecordIcon fontSize="small" className={classes[status]} />
      <Typography variant="h6">
        Websocket is {status}
      </Typography>
    </React.Fragment>
  );
};

export default StatusIndicator;