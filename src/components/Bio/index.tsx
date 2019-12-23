import React from 'react';
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

import './bio.scss';
const config = require('../../config');

const Bio = () => {
  const {
    comment,
    name,
    company,
    location,
    email,
    website,
    linkedin,
    facebook,
    instagram,
    github,
  } = config;

  return (
    <div className="bio">
      {!comment ? null : <span className="comment">{comment}</span>}

      {!name ? null : (
        <p className="name">
          <Fa icon={faUserCircle} />
          {name}
        </p>
      )}

      {!company ? null : (
        <p className="company">
          <Fa icon={faAddressCard} />
          {company}
        </p>
      )}

      {!location ? null : (
        <p className="location">
          <Fa icon={faMapMarkerAlt} />
          {location}
        </p>
      )}

      {!email ? null : (
        <p className="email">
          <Fa icon={faAt} />
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}

      {!website ? null : (
        <p className="website">
          <Fa icon={faLink} />

          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </p>
      )}

      <div className="social">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Fa icon={faRss} className="rss" />
        </a>

        {!linkedin ? null : (
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Fa icon={faLinkedin} className="linkedin" />z
          </a>
        )}

        {!facebook ? null : (
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <Fa icon={faFacebook} className="facebook" />
          </a>
        )}
        {!instagram ? null : (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <Fa icon={faInstagram} className="instagram" />
          </a>
        )}
        {!github ? null : (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Fa icon={faGithub} className="github" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Bio;
