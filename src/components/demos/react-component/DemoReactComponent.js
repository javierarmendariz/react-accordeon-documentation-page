import React from 'react';

import Base from '../base/Base';
import { Accordeon, Panel, Nav, Content } from 'react-accordeon';

import AnotherReactComponentNav from './Nav/AnotherReactcomponentNav';
import AnotherReactComponentContent from './AnotherReactComponentContent';
import AnotherReactComponentContentTwo from './AnotherReactComponentContentTwo';

const ReactComponent = (props) => {
  const title = 'Given valid React Components';
  const code = `
  import React, { PropTypes } from 'react';
  import { Accordeon, Panel, Nav, Content } from 'react-accordeon';
  import AnotherReactComponentNav from './Another-react-component-nav.js';
  import AnotherReactComponentContent from './Another-react-component-content.js';
  function ExampleOne(props) {
    return (
      <Accordeon>
        <Panel key="panel1">
          <Nav><AnotherReactComponent /></Nav>
          <Content>
            <AnotherReactComponentContent />
          </Content>
        </Panel>
      </Accordeon>
      );
  }

  // A valid React stateless Component (AnotherReactComponentNav.js)
  // We can configure the 'toggle' trigger in any React supported event (onClick={toggle})
  import React, { PropTypes } from 'react';
  const AnotherReactComponentNav = (props) => {
    const { expanded, toggle } = props;
    return (
      <h2>
        {expanded ? '-' : '+'}
        <button
          onClick={toggle}
          aria-expanded={expanded}
          role="tab"
        >
          Question 1
        </button>
      </h2>
    );
  };

  AnotherReactComponentNav.propTypes = {
    toggle: PropTypes.func,
    expanded: PropTypes.bool,
  };

  export default AnotherReactComponentNav;

  // A valid React stateless Component (AnotherReactComponentContent.js)
  import React, { PropTypes } from 'react';
  const AnotherReactComponentContent = (props) => {
    const { expanded, toggle } = props;
    return (
      <div>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </div>
    );
  };

  AnotherReactComponentContent.propTypes = {
    toggle: PropTypes.func,
    expanded: PropTypes.bool,
  };

  export default AnotherReactComponentContent;
`;
  const accordeon = (
    <Accordeon>
      <Panel key="panel1">
        <Nav><AnotherReactComponentNav number={1} /></Nav>
        <Content>
          <AnotherReactComponentContentTwo />
        </Content>
      </Panel>
      <Panel key="panel2">
        <Nav><AnotherReactComponentNav number={2} /></Nav>
        <Content>
          <AnotherReactComponentContent />
        </Content>
      </Panel>
      <Panel key="panel3">
        <Nav><AnotherReactComponentNav number={3} /></Nav>
        <Content>
          <AnotherReactComponentContent />
        </Content>
      </Panel>
    </Accordeon>
  );
  return (
    <Base title={title} code={code} accordeon={accordeon} description="" anchor="react-component" />
  );
};

export default ReactComponent;
