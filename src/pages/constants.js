import React from 'react';
import TableCard from 'components/table-card';
import SpeciesPopulation from 'pages/data/s&p';
import PopulationEstimates from 'pages/data/pe';
import PopulationTrends from 'pages/data/trends';
import Threshold from 'pages/data/threshold';

const PagesInfo = {
  BACKGROUND: {
    title: 'Background',
    tabs: [
      { name: 'What are Waterbirds?', id: 'WAW'},
      { name: 'What is waterbird population?', id: 'WIWP' },
      { name: 'What are flyways?', id: 'WAF' },
      { name: 'Glossary', id: 'Glossary'}
    ],
    tabsInfo: [
      {
        id: 'WAW',
        intro: 'The Ramsar Convention defines ‘waterfowl’ as species of birds that are “ecologically dependent upon wetlands” and has defined “waterbird” as being synonymous with “waterfowl” for the purposes of the application of the Convention.',
        content: 'The 3rd, 4th and 5th editions of Waterbird Population Estimates considers the same families of birds as were covered in the earlier editions. However, the term ‘waterbird’ implies a broader meaning than the strict definition of ‘waterfowl’ given in the second edition, and more in keeping with the Ramsar definition of ‘waterfowl’, i.e. birds that are ecologically dependent on wetlands. Many participants in the International Waterbird Census, coordinated by Wetlands International, already submit counts of wetland birds additional to the families listed above, and it has been proposed that future editions of Waterbird Population Estimates should include population estimates for these, wherever possible.'
      },
      {
        id: 'WIWP',
        intro: 'For a full and detailed discussion of this question, readers are referred to the introductory chapters of the Atlas of Anatidae Populations in Africa and Western Eurasia (Scott and Rose 1996) A waterbird population can be defined as a distinct assemblage of individuals which does not experience significant emigration or immigration.',
        content: 'This definition can only be fulfilled if the interchange of individuals between populations remains at a low level. The degree to which exchange of individuals occurs will determine gene flow and hence the justification for recognising subspecies or merely populations. Given the current information available for waterbirds, it is rarely possible to define ideal populations. There is often overlap of populations at some stage of the annual cycle, and it is even possible for populations to mix yet maintain independence through behavioural isolating mechanisms. Many species have a limited geographical range and can be considered as one population, while others have a cosmopolitan distribution making the consideration of one population inappropriate for conservation and management purposes. For these species, biogeographic units have to be defined taking into consideration all aspects of biology and the practicalities of conserving the populations. In these cases it is often beneficial to use a particular geographic region for more than one species (e.g. East Asia/Australasia, Northwest Europe, Southern Africa). To date, the term ‘flyway’ has most commonly been used to describe zones common to many species, based on the approximate separation of populations - see the page "What are Flyways?" for a more detailed discussion. For this site, biogeographic populations have been defined, as far as possible, on the basis of the biology of each species, although it has been necessary to present data using traditional ‘flyway’ boundaries where more precise information is lacking. For sedentary species it becomes more difficult to apply the definitions suggested for populations. It is often possible to demonstrate that the dynamics of almost every population fragment are relatively independent of each other. This is especially true for sedentary island populations. In such situations, these smaller populations are best considered as part of a more extensive meta-population. The alternative is to treat every sedentary species as one population which is often equally difficult to justify. In the absence of practical guidelines or principles for defining populations of sedentary species, decisions have been made according to subspecific divisions (usually following del Hoyo et al. 1992 and 1996) and with respect to practical implementation of the 1% thresholds. Some anomalies still occur in the treatment of sedentary waterbird species in this publication because of differences between species in morphological variation and consequent taxonomic treatment. For example, the Striated Heron Butorides striatus is a sedentary species that exhibits a high degree of morphological variation over its very wide range. Over 30 subspecies have been described, and 23 of these are widely recognised. In this case, estimates (where available) have been provided for each distinct subspecies in line with current taxonomic understanding.'
      },
      {
        id: 'WAF',
        intro: 'This website distinguishes between “flyways” and “biogeographic realms”. The demarcation of biogeographic realms (which are divisions of the land masses of the world according to their distinctive floras and faunas) follows WWF.',
        content: ''
      },
      { name: 'Glossary', id: 'Glossary'} ]
  },
  DATA: {
    title: 'Data presentation',
    tabs: [
      { name: 'Summary information', id: 'Summary' },
      { name: 'Species & Population', id: 'SP' },
      { name: 'Population Estimates', id: 'PE' },
      { name: 'Population Trends', id: 'PT'},
      { name: '1% threshold', id: 'Threshold'}
    ],
    tabsInfo: [
      {
        id: 'Summary',
        intro: '',
        content: <TableCard />
      },
      {
        id: 'SP',
        content: <SpeciesPopulation />
      },
      {
        id: 'PE',
        content: <PopulationEstimates />
      },
      {
        id: 'PT',
        intro: '',
        content: <PopulationTrends />
      },
      {
        id: 'Threshold',
        content: <Threshold />
      }
    ],
  },
  CREDITS: { title: 'Credits', description: null },
  FAQ: { title: 'FAQ', description: null }
}

export default PagesInfo;
