/**
 * @file Contains components that is the base structure.
 */
import Box from '@mui/material/Box';
import React from 'react';
import { BoxPlotChart, BarChart } from './Charts';
import InfoBox from './InfoBox';

import { SiteProperties } from './SitePropetiesInterface';

interface GraphComponentProps {
  metrics: Array<string>;
  sites: Array<string>;
  siteProps: Map<string, SiteProperties>;
  fileHandler: any;
}

interface InfoContainerProps {
  // sites: Array<string>;
  fileHandler: any;
}
/**
 * Component that contains all Box graphs
 *
 * @param props contains fileHandler siteprops with siteId as key and SiteProperties as value
 * @returns MUI box component
 */
export function BoxGraphComponent(props: GraphComponentProps): JSX.Element {
  const { metrics } = props;
  const { sites } = props;
  const { siteProps } = props;
  const { fileHandler } = props;

  return (
    <Box
      data-testid="boxgraph-component"
      sx={{
        flexDirection: 'column',
        display: 'flex',
        paddingTop: '0vh',
        paddingBottom: '3vh',
        backgroundColor: 'primary.light2',
        '&:hover': {
          backgroundColor: 'primary.light2',
        },
      }}
    >
      <Box>
        {' '}
        <BoxPlotChart
          metrics={metrics}
          sites={sites}
          siteProps={siteProps}
          fileHandler={fileHandler}
        />{' '}
      </Box>
    </Box>
  );
}

/**
 * Component that contains all bar graphs
 *
 * @param props contains metrics, sites and filehandler
 * @returns MUI box component
 */
export function BarGraphComponent(props: GraphComponentProps): JSX.Element {
  const { metrics, sites, siteProps, fileHandler } = props;
  return (
    <Box
      data-testid="bargraph-component"
      sx={{
        flexDirection: 'column',
        display: 'flex',
        paddingTop: '0vh',
        paddingBottom: '3vh',
        backgroundColor: 'primary.light2',
        '&:hover': {
          backgroundColor: 'primary.light2',
        },
      }}
    >
      <Box>
        {' '}
        <BarChart
          metrics={metrics}
          sites={sites}
          siteProps={siteProps}
          fileHandler={fileHandler}
        />{' '}
      </Box>
    </Box>
  );
}

/**
 * Component that contains all infoboxes
 *
 * @param props is filehandler
 * @returns MUI box component
 */
export function InfoboxContainer(props: InfoContainerProps): JSX.Element {
  const { /** sites */ fileHandler } = props;
  return (
    <Box
      data-testid="infobox-component"
      sx={{
        flexDirection: 'row',
        display: 'flex',
        backgroundColor: 'primary.light1',
        color: 'secondary.main',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: '1vw',
      }}
    >
      <InfoBox siteId="4b14a8" fileHandler={fileHandler} />
      <InfoBox siteId="b4eb0" fileHandler={fileHandler} />
      <InfoBox siteId="4b14a8" fileHandler={fileHandler} />
      <InfoBox siteId="b4eb0" fileHandler={fileHandler} />
      <InfoBox siteId="4b14a8" fileHandler={fileHandler} />
      <InfoBox siteId="b4eb0" fileHandler={fileHandler} />
      <InfoBox siteId="4b14a8" fileHandler={fileHandler} />
      <InfoBox siteId="b4eb0" fileHandler={fileHandler} />
      <InfoBox siteId="4b14a8" fileHandler={fileHandler} />
      <InfoBox siteId="b4eb0" fileHandler={fileHandler} />
      <InfoBox siteId="4b14a8" fileHandler={fileHandler} />
      <InfoBox siteId="b4eb0" fileHandler={fileHandler} />
      <InfoBox siteId="4b14a8" fileHandler={fileHandler} />
      <InfoBox siteId="b4eb0" fileHandler={fileHandler} />
      <InfoBox siteId="4b14a8" fileHandler={fileHandler} />
      <InfoBox siteId="b4eb0" fileHandler={fileHandler} />
      <InfoBox siteId="4b14a8" fileHandler={fileHandler} />
      <InfoBox siteId="b4eb0" fileHandler={fileHandler} />
    </Box>
  );
}
