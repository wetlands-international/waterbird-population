import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';
import { Popup } from 'react-map-gl'

import { getParams } from 'utils/layers';

import { fetchPopulationsByLocation } from 'services/population';

// Components
import Map from 'components/map';
import MapControls from 'components/map/controls';
import ZoomControl from 'components/map/controls/zoom';
import Legend from 'components/map/legend';


export const MapContainer = ({
  router,
  coordinates,
  populationsLayersByLocation,
  setPopulationsByLocation,
  setRouter,
  setLocation,
  scrollZoom = false
}) => {
  const [viewport, setViewport] = useState({ zoom: 1, latitude: 0, longitude: 0 });
  const [hoverInteractions, setHoverInteractions] = useState({});
  const [interactiveLayerIds, setInteractiveLayerIds] = useState([]);

  useEffect(() => {
    coordinates && fetchPopulationsByLocation(coordinates[0], coordinates[1]).then((data) => setPopulationsByLocation(data));
  }, [coordinates])

  const layers = populationsLayersByLocation.map(l => {
    return {
      ...l,
      params: !!coordinates && !!l.paramsConfig && getParams(l.paramsConfig, { lng: coordinates[0], lat: coordinates[1] })
    }
  });

  const onZoomChange = (zoom) => {
    setViewport({
      zoom,
      transitionDuration: 250
    });
  };
  const onAfterAdd = layerModel => {
    if (!isEmpty(layerModel.interactionConfig)) {
      layerModel.mapLayer.layers.forEach(l => {
        const { id } = l;
        if (!interactiveLayerIds.includes(id)) {
          setInteractiveLayerIds(prevInteractiveLayersIds => [...prevInteractiveLayersIds, id]);
        }
      });
    }
  };

  const onAfterRemove = layerModel => {
    if (!isEmpty(layerModel.interactionConfig)) {
      layerModel.mapLayer.layers.forEach(l => {
        const { id } = l;

        if (interactiveLayerIds.includes(id)) {
          setInteractiveLayerIds(prevInteractiveLayersIds => {
            const arr = prevInteractiveLayersIds.filter(e => e !== id);

            return arr;
          });
        }
      });
    }
  };

  return (
    <div className='c-map-container'>
      <Map
        viewport={viewport}
        scrollZoom={scrollZoom}
        mapStyle='mapbox://styles/mapbox/light-v9'
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        interactiveLayerIds={interactiveLayerIds}
        onClick={(e) => {
          if (e && e.features) {
            e.features.forEach(f => (
              setHoverInteractions({
                [f.source]: f.properties
              })

            ));
            setLocation(e.lngLat);
          }
        }}
        onHover={(e) => {
          if (e && e.features) {
            e.features.forEach(f => (
              setHoverInteractions({
                [f.source]: f.properties
              })
            ));
          }
       }}
       onMouseLeave={() => {
          setHoverInteractions({});
        }}
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
                    onAfterAdd={onAfterAdd}
                    // onAfterRemove={onAfterRemove}
                  />
                )

              })}
            </LayerManager>
            {coordinates && hoverInteractions['populations-by-location'] && (
              <Popup
                key={hoverInteractions['populations-by-location']}
                latitude={coordinates[1]}
                longitude={coordinates[0]}
                closeButton={false}
              >
                {hoverInteractions['populations-by-location'].populationname}
              </Popup>
            )}

          </Fragment>
        }
      </Map>

      <MapControls>
        <ZoomControl
          viewport={viewport}
          onClick={onZoomChange}
        />
      </MapControls>

      {/* <Legend /> */}
    </div>
  );
};

MapContainer.propTypes = {
  viewport: PropTypes.shape({})
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
  }
};

export default MapContainer;
