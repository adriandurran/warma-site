import React from 'react';
import { graphql } from 'gatsby';

import OurCommittee from '../components/committee/OurCommittee';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';

const Committee = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <OurCommittee />
    </Layout>
  );
};

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "7198.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Committee;
