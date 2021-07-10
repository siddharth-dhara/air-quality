import React, { useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import LiveMonitoring from '../components/live-monitoring-container';

export const WebSocket = () => {
  // Public API that will receives the response for the air quality
  const [socketUrl] = useState('ws://city-ws.herokuapp.com/');

  /**
   * Using the 3rd argument this handler closes the Websocket connection.
   * 
   * @param {Bool} shouldConnect 
   * @returns 
   */
  const _closeWebsocket = (shouldConnect) =>
    useWebSocket('wss://demos.kaazing.com/echo', [], shouldConnect);

  const {
    lastMessage,
    readyState,
  } = useWebSocket(socketUrl);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  const status = connectionStatus === 'Open' ? 'connected' : 'disconnected';

  const cityData = () => {
    if(lastMessage && lastMessage.data) {
      /**
       * converting response from
       * string->array->object->map
       * 
       * Map provides better accessibility for iteration over Object
       */
      const data = JSON.parse(lastMessage.data).reduce(
        (obj, item) => Object.assign(obj, { [item.city]: [item.aqi] }), {});
      //return new Map(Object.entries(data));
      return data;
    }
    return undefined;
  };

  return (
    <LiveMonitoring
      status={status}
      cityData={cityData()}
      closeWebsocket={_closeWebsocket}/>
  );
};