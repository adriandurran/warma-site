import React from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';

const Trail = ({ trail }) => {
  const {
    name,
    location,
    distance,
    description,
    entryCost,
    awardCost,
    coords,
    linktoPDF,
    featured
  } = trail;
  return <Card>{name}</Card>;
};

export default Trail;
