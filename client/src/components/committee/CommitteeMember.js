import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import styles from '../../css/committee.module.css';

const CommitteeMember = ({ title, name, description }) => {
  return (
    <Card className={styles.member}>
      <CardContent>
        <Typography
          className={styles.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {title}
        </Typography>
        <Typography className={styles.name} color="textSecondary">
          {name}
        </Typography>

        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommitteeMember;
