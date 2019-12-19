import React from 'react';

import './toc.scss';

export interface TocProps {
  toc: string;
}
const Toc = (props: TocProps) => {
  const { toc } = props;

  return <div className="toc" dangerouslySetInnerHTML={{ __html: toc }}></div>;
};

export default Toc;
