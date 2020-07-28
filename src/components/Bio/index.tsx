import * as React from 'react';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faUserCircle, faAt, faMapMarkerAlt, faLink, faAddressCard, faRss } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './bio.scss';
import config from '../../../_config';

const Bio = () => {
  const { comment, name, company, location, email, website, linkedin, facebook, instagram, github } = config;

  return (
    <div className="bio">
      {!comment ? null : <span className="comment">{comment}</span>}

      {!name ? null : (
        <div className="bio-item name">
          <div className="icon-wrap">
            <Fa icon={faUserCircle} />
          </div>
          <span>{name}</span>
        </div>
      )}

      {!company ? null : (
        <div className="bio-item company">
          <div className="icon-wrap">
            <Fa icon={faAddressCard} />
          </div>
          <span>{company}</span>
        </div>
      )}

      {!location ? null : (
        <div className="bio-item location">
          <div className="icon-wrap">
            <Fa icon={faMapMarkerAlt} />
          </div>
          <span>{location}</span>
        </div>
      )}

      {!email ? null : (
        <div className="bio-item email">
          <div className="icon-wrap">
            <Fa icon={faAt} />
          </div>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      )}

      {!website ? null : (
        <div className="bio-item website">
          <div className="icon-wrap">
            <Fa icon={faLink} />
          </div>

          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </div>
      )}

      <div className="social">
        <a href={`${config.siteUrl}/rss`} target="_blank" rel="noopener noreferrer">
          <Fa icon={faRss} className="rss" />
        </a>

        {!linkedin ? null : (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Fa icon={faLinkedin} className="linkedin" />
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
