import React from 'react';
import TableOfContents from './TableOfContents';

const ArticleSidebar = ({ featuredImage, tableOfContents, getPostTitle }) => {
  return (
    <aside className="article-sidebar">
      {featuredImage && (
        <div className="sidebar-featured-image">
          <img src={featuredImage} alt={getPostTitle()} />
        </div>
      )}
      {tableOfContents.length > 0 && <TableOfContents toc={tableOfContents} />}
    </aside>
  );
};

export default ArticleSidebar;