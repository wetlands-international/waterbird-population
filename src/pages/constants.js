import React from 'react';

import TabInfo from 'pages/static-tabs';

import Analysis from "components/analysis";
import SpeciesPopulationInfo from 'pages/data/constants/s&p.js';
import PopulationEstimatesInfo from 'pages/data/constants/pe.js';
import ThresholdInfo from 'pages/data/constants/threshold.js';
import PopulationTrendsInfo from 'pages/data/constants/trends.js';
import WAWInfo from 'pages/background/constants/waw.js';
import WIWPInfo from 'pages/background/constants/wiwp.js';
import WAFInfo from 'pages/background/constants/waf.js';
import glossaryInfo from 'pages/background/constants/glossary.js';
import FSInfo from 'pages/credits/constants/fs.js';
import ECInfo from 'pages/credits/constants/ec.js';
import FaqInfo from 'pages/faq/constants';

const PagesInfo = {
  ANALYZE: {
    title: 'Analyze',
    tabs: false,
    tabsInfo: false,
    content: <Analysis />
  },
  BACKGROUND: {
    title: 'Background',
    tabs: [
      { name: 'What are Waterbirds?', id: 'WAW' },
      { name: 'What is waterbird population?', id: 'WIWP' },
      { name: 'What are flyways?', id: 'WAF' },
      { name: 'Glossary', id: 'Glossary' }
    ],
    info: [
      {
        id: 'WAW',
        content: <TabInfo info={WAWInfo} />
      },
      {
        id: 'WIWP',
        content: <TabInfo info={WIWPInfo} />
      },
      {
        id: 'WAF',
        content: <TabInfo info={WAFInfo} />
      },
      {
        id: 'Glossary',
        content: <TabInfo info={glossaryInfo} />
      }
    ]
  },
  DATA: {
    title: 'Data presentation',
    tabs: [
      { name: 'Species & Population', id: 'SP' },
      { name: 'Population Estimates', id: 'PE' },
      { name: 'Population Trends', id: 'PT' },
      { name: '1% threshold', id: 'Threshold' }
    ],
    info: [
      {
        id: 'SP',
        content: <TabInfo info={SpeciesPopulationInfo} />
      },
      {
        id: 'PE',
        content: <TabInfo info={PopulationEstimatesInfo} />
      },
      {
        id: 'PT',
        intro: '',
        content: <TabInfo info={PopulationTrendsInfo} />
      },
      {
        id: 'Threshold',
        intro: '',
        content: <TabInfo info={ThresholdInfo} />
      }
    ],
  },
  CREDITS: {
    title: 'Credits',
    tabs: [
      { name: 'Funders & Supporters', id: 'fs' },
      { name: 'Editors & Contributors', id: 'ec' }
    ],
    info: [
      {
        id: 'fs',
        content: <TabInfo info={FSInfo} />
      },
      {
        id: 'ec',
        content: <TabInfo info={ECInfo} />
      }
    ]
  },
  FAQ: {
    title: 'Frequently Asked Questions',
    tabs: false,
    tabsInfo: false,
    content: <TabInfo info={FaqInfo} />
  }
}

export default PagesInfo;
