import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CityCard from './city-card';
import StatusIndicator from './status-indicator';
import LegendModal from './legends-modal';
import { makeStyles } from '@material-ui/core/styles';

const { useRef } = React;

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
  JSON.parse(data).map(city => <CityCard key={'key_' + city.city} city={city} />);

export const LiveMonitoring = ({
  status,
  data
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  /**
   * This will render 2 menu items 
   * - pause the web socket listening
   * - open modal for legends
   * @returns <Menu> - material UI Menu component
   */
  const renderMenu = () => {
    return (
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Pause Websocket</MenuItem>
        <MenuItem onClick={openLegendModal}>Legends</MenuItem>
      </Menu>
    );
  };

  /**
   * ref for the legend component
   * because we want to call the LegendModal's setOpen() function from here.
   */
  const legendRef = useRef();

  /**
     * Handles Mouse Click for opening Menu
     * @param {MouseEvent} event 
     */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * Handles and manage closing of the Menu
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   * Handles opening of the legend modal
   */
  const openLegendModal = () => {
    legendRef.current.openModal();
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="absolute">
        <Toolbar className={classes.toolbar}>
          <StatusIndicator status={status}/>
          <IconButton edge="end" color="inherit">
            <MoreIcon onClick={handleClick}/>
            {renderMenu()}
          </IconButton>
          <LegendModal ref={legendRef} />
        </Toolbar>
      </AppBar>
      <Typography className={classes.title}>
        {data ? getCityRows(data) : 'No data found'}
      </Typography>
    </div>
  );
};

export default LiveMonitoring;
