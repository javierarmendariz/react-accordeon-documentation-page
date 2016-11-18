import React from 'react';
const Header = (props) => {
  const { expandAll, collapseAll } = props;
  return (
    <div>
      <button onClick={expandAll}>Expand All</button>
      &nbsp;/&nbsp;
      <button onClick={collapseAll}>Collapse All</button>
    </div>
  );
};

Header.propTypes = {
  expandAll: React.PropTypes.func,
  collapseAll: React.PropTypes.func,
};

export default Header;
