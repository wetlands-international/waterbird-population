import React from 'react';
import PropTypes from 'prop-types';

import PopulationTrend from './templates/population-trend';
import ConservationFramework from './templates/conservation-framework';
import References from './templates/references';
import Notes from './templates/notes';

import './styles.scss';


const DataDetail = ({ info }) =>
    <div className="c-data-detail">
      <PopulationTrend />
      <ConservationFramework />
      <References />
      <Notes />
    </div>

DataDetail.propTypes = {
  info: PropTypes.shape({}).isRequired
}

export default DataDetail;
