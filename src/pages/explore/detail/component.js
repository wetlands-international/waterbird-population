import React, { useEffect } from 'react';

// services
import { fetchPopulations } from 'services/population';

import DataControls from 'components/data-controls';
import DataDetail from 'components/data-detail';

import MapContainer from './map';

import './styles.scss';

const ExploreDetailPage = (props) => {
  const { router: { payload }, setPopulations } = props;
  const { specie_id } = payload;

  useEffect(() => {
    fetchPopulations(+specie_id).then(data => setPopulations({ id: specie_id, data }));
  }, [])

  return (
    <div className="l-explore">
      <div className="map-section">
        <MapContainer />
      </div>
      <div className="results-section">
        <DataControls />
        <DataDetail />
      </div>
    </div>
  )
};

export default ExploreDetailPage;