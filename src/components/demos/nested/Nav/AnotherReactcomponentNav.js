import React, { PropTypes } from 'react';
import styles from './AnotherReactComponentNav.scss';

const AnotherReactComponentNav = (props) => {
  const { expanded, toggle } = props;
  const expandCollapseIcon = expanded
  ? (<img src={require('./images/collapse-arrow.png')} alt="Expand/Collapse" />)
  : (<img src={require('./images/expand-button.png')} alt="Expand/Collapse" />);
  // We can configure the 'toggle' trigger in any React supported event (onClick={toggle})
  return (
    <div className={styles.AnotherReactComponentNav}>
      <div className="row collapse">
        <div className="small-3 columns">
          <div>
            Product Name {props.number}
          </div>
        </div>
        <div className="small-4 columns">
          <div>
            $140.00
          </div>
        </div>
        <div className="small-4 columns">
          <div>
            $14,000.00
          </div>
        </div>
        <div className="small-1 columns">
          <div>
            <button
              onClick={toggle}
              aria-expanded={expanded}
              role="tab"
            >
              {expandCollapseIcon}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AnotherReactComponentNav.propTypes = {
  toggle: PropTypes.func,
  expanded: PropTypes.bool,
  number: PropTypes.number,
};

export default AnotherReactComponentNav;
