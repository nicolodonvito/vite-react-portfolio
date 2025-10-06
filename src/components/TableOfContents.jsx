import React from 'react';

const TableOfContents = ({ toc }) => {
  return (
    <div className="table-of-contents">
      <ul>
        {toc.map((item) => (
          <li key={item.id} className={`toc-item level-${item.level}`}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;