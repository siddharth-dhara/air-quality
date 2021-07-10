import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CityCard from './city-card';
import StatusIndicator from './status-indicator';
import LegendModal from './legends-modal';
import { getUpdatedCities } from '../util/condition';
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
  container: {
    margin: '60px 20px 0 0',
    padding: 0,
  },
}));

export const LiveMonitoring = ({
  status,
  cityData,
  closeWebsocket,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [cities, setCities] = React.useState({});
  const [websocketStatus, setWebsocketStatus] = React.useState('Close');
  const CITY_COUNT = cityData ? Object.keys(cityData).length : 0;

  const getCityRows = (data) => {
    let cityMap = [];
    /**
     * if we use Map then change the following code
     */
    /*data.forEach(
      (aqi, city) => (cityMap.push(<CityCard key={'key_' + city} city={city} aqi={aqi} />))
    )*/

    Object.entries(data).forEach(([city, aqi]) =>
      (cityMap.push(<CityCard key={'key_' + city} city={city} aqi={aqi} />))
    )
    return cityMap;
  };

  useEffect(() => {
    if (cityData && CITY_COUNT > 0) {
      //setCities(prevCities => new Map([...prevCities, ...cityData]));
      console.log('# Before update:', cities);
      console.log('# cityData:', cityData);
      const CITY_DATA = Object.entries(cityData);
      CITY_DATA.forEach(([key2, val2]) => {
        // push the aqi in the list of existing city
        if(cities.hasOwnProperty(key2)) {
          const existingCity = {[key2]: [...val2, ...cities[key2]]};
          setCities(prevCities => ({...prevCities, ...existingCity}));
        } else {
          // add the new city as it doesn't exists in the list
          const newCity = {[key2]: cityData[key2]};
          setCities(prevCities => ({...prevCities, ...newCity}));
        }
      });

      console.log('# After update:', cities);
      console.log('____');
    }
  }, [cityData]);

  /**
   * This will render 2 menu items
   * - pause the web socket listening
   * - open modal for legends
   * @returns <Menu> - material-ui menu component
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
        <MenuItem onClick={handleCloseWebsocket}>{websocketStatus} Websocket</MenuItem>
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
     * Handles Mouse Click for opening menu
     * @param {MouseEvent} event 
     */
  const handleClick = (event) => {
    // open the menu
    setAnchorEl(event.currentTarget);
  };

  /**
   * Handles and manage closing of the menu
   * This has been implemented so that user can do in depth analysis of particular city's data,
   * because it is rapidly changing.
   */
  const handleCloseWebsocket = () => {
    // alter the state value(websocketStatus)
    setWebsocketStatus(websocketStatus === 'Close' ? 'Start' : 'Close');
    // close/start the websocket based on 'websocketStatus'
    closeWebsocket(websocketStatus === 'Close');
    // close the menu
    handleClose();
  };

  /**
   * Handles closing of menu
   */
  const handleClose = () => {
    // close the menu
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
          <IconButton edge="end" color="inherit" onClick={handleClick}>
            <MoreIcon />
            {renderMenu()}
          </IconButton>
          <LegendModal ref={legendRef} />
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        {cityData && CITY_COUNT > 0 ? getCityRows(cities) : 'No data found'}
      </div>
    </div>
  );
};

export default LiveMonitoring;
