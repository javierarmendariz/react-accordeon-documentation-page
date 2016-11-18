
import React from 'react';

import DemoStrings from '../../components/demos/strings/DemoStrings';
import DemoReactComponent from '../../components/demos/react-component/DemoReactComponent';
import ValidHTML from '../../components/demos/valid-html/ValidHTML';
import HeaderFooter from '../../components/demos/header-footer/HeaderFooter';
import Nested from '../../components/demos/nested/Nested';

const Demos = (props) => {
  return (
    <div className="row collapse">
      <div className="small-11 small-centered columns">
        <div>

          <div className="row expanded collapse">
            <div className="small-12 columns">
              <div>
                <h1 id="react-accordeon">React Accordeon</h1>
                <a href="https://nodei.co/npm/react-accordeon/">
                  <img src="https://nodei.co/npm/react-accordeon.png?mini=true" alt="npm install react-accordeon" />
                </a>
                <p>
                React Accordeon component with expand/collapse CSS animation.
                The event trigger can be configured to any component, such in the
                Navigation and Content
                </p>
                <ul>
                  <li><a href="#strings">Accordeon with plain strings in the Nav and Content</a></li>
                  <li><a href="#valid-html">With some valid HTML</a></li>
                  <li><a href="#react-component">Given valid React Components</a></li>
                  <li><a href="#header-footer">Accordeon with Header and Footer</a></li>
                  <li><a href="#nested">Nested Accordeons</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row collapse">
            <div className="small-12 columns">
              <div>
                <DemoStrings />
                <ValidHTML />
                <DemoReactComponent />
                <HeaderFooter />
                <Nested />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Demos;
