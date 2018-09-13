/**
The MIT License (MIT)

Copyright (c) 2018 greglobinski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const Hit = props => {
  const { hit } = props;

  return (
    <React.Fragment>
      <Link to={hit.slug}>{hit.title}</Link>

      {/* --- STYLES --- */}
      <style jsx global>{`
        .ais-Hits-item {
          padding: 0.5em 0 0.5em 1em;
          position: relative;
          font-size: 1.2em;
          display: block;
          width: 100%;
          color: #666;
        }

        .ais-Hits-item:before {
          content: "•";
          position: absolute;
          top: 0.5em;
          left: 0.1em;
        }
      `}</style>
    </React.Fragment>
  );
};

Hit.propTypes = {
  hit: PropTypes.object.isRequired
};

export default Hit;
