import React from 'react';
import ReactDOM from 'react-dom';
import CityCard from '../../../../../com/proximityLabs/aqm/components/city-card';

describe('City Card', () => {
  it(' should render with provided props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CityCard aqi={[0]} city="XYZ" />, div);
    ReactDOM.unmountComponentAtNode(div);
    //TODO: use enzyme ti shallow mount the components and verify the props
  });
});
