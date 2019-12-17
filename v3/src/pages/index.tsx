import * as React from 'react';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faAt,
  faMapMarkerAlt,
  faLink,
  faAddressCard,
  faRss,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import './index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="bio">
      <span className="comment">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minima
        similique, molestiae quae aperiam at distinctio! Quis quas fugiat
        quidem?
      </span>

      <p className="name">
        <Fa icon={faUserCircle} />
        UserName
      </p>

      <p className="company">
        <Fa icon={faAddressCard} />
        Company
      </p>

      <p className="location">
        <Fa icon={faMapMarkerAlt} />
        Location
      </p>

      <p className="email">
        <Fa icon={faAt} />
        <a href="mailto:">Email</a>
      </p>

      <p className="website">
        <Fa icon={faLink} />

        <a href="http://" target="_blank" rel="noopener noreferrer">
          WebSite
        </a>
      </p>

      <div className="social">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Fa icon={faRss} className="rss" />
        </a>

        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Fa icon={faLinkedin} className="linkedin" />
        </a>

        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Fa icon={faFacebook} className="facebook" />
        </a>

        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Fa icon={faInstagram} className="instagram" />
        </a>

        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Fa icon={faGithub} className="github" />
        </a>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
