import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';

import Download from "components/download";
import ClearFilters from 'components/filters/clear-filters';
import ActiveFilters from 'components/filters/active-filters';
import Filters from 'components/analysis/filters';

import "./styles.scss";

const DataControls = ({ dataSpecs, filters, setFilters, resetFilters, activeFilters, publications, page }) => {

  const [filtersVisibility, toggleVisibility] = useState(false);

  const handleClick = (type, value) => {
    const filtersUpdate = {
      ...filters,
      [type]: type === 'publication_id'
        ? { label: `${publications[0].description}`, value: publications[0].id }
        : filters[type].filter(f => f !== value)
    }
    setFilters(filtersUpdate);
  };

  const handleFilters = () => {
    resetFilters();
  };

  const toggleFilters = () => {
    toggleVisibility(!filtersVisibility);
  }

  return (
    <div className={classnames('c-data-configuration', { '-filters': !filtersVisibility })}>
      <div className="data-configuration--buttons">
        <Download
          text={'Download results'}
          type="explore-detail"
          dataSpecs={dataSpecs}
          filename={'populations'}
          className="-dashed"
        />
        {page !== 'ANALYZE' && (
          <>
            <ActiveFilters
              filters={filters}
              onClick={handleClick}
              heading={'Filtered by:'}
              active={activeFilters}
            />
            <ClearFilters
              handleFilters={handleFilters}
              activeFilters={activeFilters}
              unsetteledFilters={false}
            />
          </>
        )}
        {page === 'ANALYZE' && (
          <div className="data-filters">
            <p>Filters configuration:</p>
            <button
              aria-label="filters-dropdown"
              className={classnames({
                '-open': filtersVisibility,
                '-close': !filtersVisibility,
              })}
              onClick={toggleFilters}
            />
          </div>
        )}
        <div>Click on map to reveal relevant populations</div>
      </div>
      {filtersVisibility && (
        <div className="filters">
          <Filters />
        </div>
      )}
    </div>
  );
};

DataControls.propTypes = {
  info: PropTypes.shape({})
};

export default DataControls;
