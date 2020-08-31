import React from 'react';

import PopulationInfo from './templates/population-info';
import ConservationFramework from './templates/conservation-framework';
import PopulationSize from './templates/population-size';
import PopulationTrend from './templates/population-trend';
import PopulationPercent from './templates/population-percent';
import References from './templates/references';
import Notes from './templates/notes';

import './styles.scss';


const DataDetail = (props) =>  {
  const { populationInfoData, populationSizeData, populationTrendData, populationPercentData, populationReferences, user } = props;

  return (
    <div className="c-data-detail">
      <PopulationInfo data={populationInfoData} />
      {/* <ConservationFramework /> */}
      <PopulationSize data={populationSizeData} user={user} user={user} />
      <PopulationTrend data={populationTrendData} user={user} />
      <PopulationPercent data={populationPercentData}user={user} />
      <References data={populationReferences}/>
      {/* <Notes /> */}
    </div>
  );
}


export default DataDetail;
