import React from 'react';
import Title from '../Title';

import styles from '../../css/committee.module.css';
import members from '../../constants/committee';
import CommitteeMember from './CommitteeMember';

const OurCommittee = () => {
  return (
    <section className={styles.committee}>
      <Title title="our" subtitle="committee" />
      <div className={styles.center}>
        {members.map(({ title, description, name }, i) => {
          return (
            <CommitteeMember
              title={title}
              name={name}
              description={description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurCommittee;
