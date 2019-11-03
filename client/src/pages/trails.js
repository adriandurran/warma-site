import React from 'react';
import { graphql } from 'gatsby';

import PermanentTrails from '../components/trails/PermanentTrails';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';

const Trails = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <PermanentTrails />
    </Layout>
  );
};

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "7119.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Trails;
