import React from 'react';

import Base from '../base/Base';
import { Accordeon, Panel, Nav, Content } from 'react-accordeon';

import AnotherReactComponentNav from './Nav/AnotherReactcomponentNav';
import AnotherReactComponentContent from './AnotherReactComponentContent';
import AnotherReactComponentContentTwo from './AnotherReactComponentContentTwo';
import Header from './Header';

// Nested Accordeons
import HeaderFooter from '../header-footer/HeaderFooter';

const Nested = (props) => {
  const title = 'Nested Accordeons';
  const code = `
  import React, { PropTypes } from 'react';
  import { Accordeon, Panel, Nav, Content } from 'react-accordeon';
  import AnotherReactComponentNav from './Another-react-component-nav.js';
  import AnotherReactComponentContent from './Another-react-component-content.js';
  function ExampleOne(props) {
    return (
      <Accordeon header={<Header />} footer={<Header />}>
        <Panel key="panel1">
          <Nav><AnotherReactComponentNav number={1} /></Nav>
          <Content>
            <div style={{ padding: '2rem', backgroundColor: '#ECECEC' }}>
              {/* Nested Accordeon */}
              <Accordeon header={<Header />} footer={<Header />}>
                <Panel key="nestedpanel1">
                  <Nav><AnotherReactComponentNav number={1} /></Nav>
                  <Content>
                    <AnotherReactComponentContentTwo />
                  </Content>
                </Panel>
                <Panel key="nestedpanel2">
                  <Nav><AnotherReactComponentNav number={2} /></Nav>
                  <Content>
                    <AnotherReactComponentContent />
                  </Content>
                </Panel>
                <Panel key="nestedpanel3">
                  <Nav><AnotherReactComponentNav number={3} /></Nav>
                  <Content>
                    <AnotherReactComponentContent />
                  </Content>
                </Panel>
              </Accordeon>
              {/* Nested Accordeon */}
            </div>
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
    <Accordeon header={<Header />} footer={<Header />}>
      <Panel key="panel1">
        <Nav><AnotherReactComponentNav number={1} /></Nav>
        <Content>
          <div style={{ padding: '2rem', backgroundColor: '#ECECEC' }}>
            <Accordeon header={<Header />} footer={<Header />}>
              <Panel key="nestedpanel1">
                <Nav><AnotherReactComponentNav number={1} /></Nav>
                <Content>
                  <AnotherReactComponentContentTwo />
                </Content>
              </Panel>
              <Panel key="nestedpanel2">
                <Nav><AnotherReactComponentNav number={2} /></Nav>
                <Content>
                  <AnotherReactComponentContent />
                </Content>
              </Panel>
              <Panel key="nestedpanel3">
                <Nav><AnotherReactComponentNav number={3} /></Nav>
                <Content>
                  <AnotherReactComponentContent />
                </Content>
              </Panel>
            </Accordeon>
          </div>
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
    <Base title={title} code={code} accordeon={accordeon} description="" anchor="nested" />
  );
};

export default Nested;
