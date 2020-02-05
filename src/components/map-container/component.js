import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';


import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';
import { NavigationControl, FullscreenControl } from 'react-map-gl';

// Components
import Map from 'components/map';
import Legend from 'components/map-container/legend';

import './styles.scss';

export const MapContainer = ({
  viewport,
  setViewport,
  layers,
  mapStyle,
  map,
  bounds
}) => {



  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();

    return function cleanup() {
      window.removeEventListener('resize', resize);
    };
    // eslint-disable-next-line
  }, []);

  const onViewportChange = () => {
    const { width, height, latitude, longitude, zoom } = viewport;
  };
console.log(map)
  const resize = () => {
    onViewportChange({
      ...viewport,
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  return (
    <div className='c-map-container'>
      {console.log('mapa')}
      <Map
        viewport={viewport}
        // bounds={bounds}
        mapStyle='mapbox://styles/mapbox/light-v9'
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      // onViewportChange={onViewportChange}
      // onClick={clickHandler}
      // interactiveLayerIds={interactiveLayerIds}
      // onPopupClose={popupCloseHandler}
      >

        {(map) =>
          <Fragment>
            <LayerManager
              map={map}
              plugin={PluginMapboxGl}
            >
              {!!layers && layers.map((l, i) => {
                return (
                  <Layer
                    key={l.id}

                    {...l}
                  />
                )

              })}
            </LayerManager>

            <NavigationControl className="map-controls" />
            <FullscreenControl className="map-fullscreen" />
          </Fragment>
        })}

      </Map>
      <Legend />
    </div>
  );
};


MapContainer.propTypes = {
  viewport: PropTypes.shape({}),
  setViewport: PropTypes.func,
  isCollapse: PropTypes.bool.isRequired,
  mapboxApiAccessToken: PropTypes.string.isRequired,
  mapStyle: PropTypes.shape({}).isRequired,
  bounds: PropTypes.shape({}).isRequired,
  goToCountry: PropTypes.func,
  goToAOI: PropTypes.func,
  setPopup: PropTypes.func,
  removePopup: PropTypes.func
};

MapContainer.defaultProps = {
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
    longitude: 0,
    latitude: 0,
    zoom: 2,
    maxZoom: 16,
    bearing: 0,
    pitch: 0
  },

  setViewport: () => { },
};

export default MapContainer;
