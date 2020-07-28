import * as React from 'react';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-regular-svg-icons';
import './styles/404page.scss';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div id="notFound">
      <div className="icon-wrap">
        <Fa icon={faFrown} />
      </div>
      <h1>404</h1>
      <p>{`That page doesn't exist or is unavailable.`}</p>
    </div>
  </Layout>
);

export default NotFoundPage;
