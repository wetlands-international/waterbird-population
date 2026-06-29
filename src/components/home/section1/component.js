import React, { useEffect, useState } from 'react';
import Link from 'redux-first-router-link';
import Image from '../images/section1.png';

import { fetchConservationFrameworks } from 'services/conservation';

import './styles.scss';

const Section1 = ({ setFilters, filters }) => {
  const [filterIds, setLinks] = useState('');

  useEffect(() => {
    fetchConservationFrameworks().then((data) => setLinks(data));
  }, []);

  const handleClick = (value) => {
    setFilters({
      ...filters,
      framework_id: [value],
    });
  };

  const label = (e) => {
  const renamedLabels = {
    'CAF Action Plan': 'CMS Central Asian Flyway',
    'EAAF Partnership': 'East Asian-Australasian Flyway Partnership',
    'EUBD': 'EU Birds Directive',
    'AEWA': 'African-Eurasian Migratory Waterbird Agreement',
    'WHSRN': 'Western Hemisphere Shorebird Reserve Network',
    'CAFF': 'Conservation of Arctic Flora and Fauna',
    'Ramsar Convention': 'Ramsar Convention on Wetlands',
  };

  return renamedLabels[e] ?? e;
};

  return (
    <section className="c-section1">
      <div className="col-md-5 col-sm-12">
        <figure>
          <img src={Image} alt="Wetlands International" />
          <figcaption>by Tommy P. Pedersen</figcaption>
        </figure>
      </div>
      <div className="wrapper">
        <div className="row start-xs">
          <div className="col-md-7 col-sm-12">
            <h1>
              Waterbird <br /> Populations Portal
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-md-8 col-sm-12">
            <p className="home-subtitle">
              Your source of the world’s latest waterbird population information.
            </p>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-md-6 col-sm-12">
            <h2>Data-driven Waterbird Population Estimates</h2>
            <p className="center">Direct access to:</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <nav>
              <ul className="row start-lg center-xs equal-height">
                  {filterIds &&
                  filterIds.length &&
                  filterIds.map(({ id, code }) => (
                    <div key={code} className="col-lg-4 col-md-6 col-xsm-12 center-xs">
                      <li>
                        <Link
                          to={{
                            type: 'EXPLORE',
                            payload: { pathname: 'explore' },
                            query: { conservation: id },
                          }}
                          onClick={() => handleClick(id)}                        >
                          {label(code)}
                        </Link>
                      </li>
                    </div>
                  ))}                                   
              </ul>
            </nav>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-md-10 col-sm-12">
            <p className="center bottom-text">
              The Waterbird Populations Portal (WPP) online database provides current and historic
              estimates, trends and 1% thresholds for over 800 waterbird species and 2300
              biogeographic populations worldwide. This project has been developed by Wetlands
              International with the support of Environment Agency Abu Dhabi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
