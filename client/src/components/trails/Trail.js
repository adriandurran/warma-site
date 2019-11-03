import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Link
} from '@material-ui/core';

import TrailMap from './TrailMap';

import styles from '../../css/trails.module.css';

const Trail = ({ trail }) => {
  const {
    name,
    location,
    distance,
    description,
    entryCost,
    awardCost,
    coords,
    linktoPDF
  } = trail;
  return (
    <Card className={styles.trail}>
      <CardHeader title={name} subheader={location} />
      <CardMedia>
        <TrailMap coords={coords} name={name} />
      </CardMedia>
      <CardContent>
        <h4 className={styles.details}>Distance:&nbsp; {distance}</h4>
        <p className={styles.details}>{description}</p>
        <h5 className={styles.details}>Entry cost:&nbsp; {entryCost}</h5>
      </CardContent>
      <CardActions>
        <Link href="#" className={styles.link}>
          Download description and route details
        </Link>
      </CardActions>
    </Card>
  );
};

export default Trail;
