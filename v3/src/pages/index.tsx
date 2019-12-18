import * as React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Bio from '../components/Bio';
import './index.scss';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Bio />
    </Layout>
  );
};

export default IndexPage;
