import React from 'react';
import styles from './Base.scss';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

const Base = (props) => {
  return (
    <article id={props.anchor}>
      <div className="row collapse">
        <div className="small-12 columns">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="row collapse">
        <div className="small-12 medium-6 columns">
          <div className={styles.boxContent}>
            <SyntaxHighlighter language="jsx" style={docco}>
              {props.code}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="small-12 medium-6 columns">
          <div className={styles.boxContent}>
            {props.accordeon}
          </div>
          <p style={{ textAlign: 'right', padding: '1rem' }}>
            <a href="#react-accordeon">Back to top</a>
          </p>
        </div>
      </div>
    </article>
  );
};

Base.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  code: React.PropTypes.string.isRequired,
  accordeon: React.PropTypes.node.isRequired,
};

export default Base;
