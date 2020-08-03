import * as React from 'react';

import './toc.scss';

interface TocProps {
  toc: string;
  isOutside: boolean;
}

const Toc = (props: TocProps) => {
  const { toc, isOutside } = props;

  return <div className={`toc ${isOutside ? 'outside' : 'inside'}`} dangerouslySetInnerHTML={{ __html: toc }}></div>;
};

export default Toc;
