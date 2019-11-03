import React from 'react';
import Title from '../Title';
import styles from '../../css/trails.module.css';
import permtrails from '../../constants/permtrails';

import Trail from './Trail';

const PermanentTrails = () => {
  return (
    <section className={styles.center}>
      <Title title="permanent" subtitle="trails" />
      <article>
        <p>
          We organise a number of permanent trails that can be walked at any
          time by both members and non-members. Download the route descriptions
          below and answer the questions as you complete the trail. Once you are
          finished, complete the Permanent Trail Registration Form to claim your
          award and IVV distance stamp. Trails can be walked at any time and
          more than once in year.
        </p>
      </article>
      <div className={styles.trails}>
        {permtrails.map((trail, i) => (
          <Trail trail={trail} key={i} />
        ))}
      </div>
    </section>
  );
};

export default PermanentTrails;
