import React from 'react';
import Title from '../Title';
import permtrails from '../../constants/permtrails';
import Trail from '../trails/Trail';

import styles from '../../css/trails.module.css';

const FeaturedTrails = () => {
  return (
    <section className={styles.center}>
      <Title title="featured" subtitle="trails" />
      <div className={styles.trails}>
        {permtrails.map((trail, i) => {
          return <>{trail.featured && <Trail trail={trail} key={i} />}</>;
        })}
      </div>
    </section>
  );
};

export default FeaturedTrails;
