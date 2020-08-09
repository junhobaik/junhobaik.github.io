import * as React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import config from '../../../_config';

interface CommentProps {
  slug: string;
  title: string;
}

const Comment = ({ slug, title }: CommentProps) => {
  const disqusConfig = {
    shortname: config.disqusShortname,
    config: {
      url: `${config.siteUrl + slug}`,
      identifier: slug,
      title,
    },
  };

  return (
    <div className="comments">
      <DiscussionEmbed {...disqusConfig} />
    </div>
  );
};

export default Comment;
