import React from 'react';

import Base from '../base/Base';
import { Accordeon, Panel, Nav, Content } from 'react-accordeon';

const ReactComponent = (props) => {
  const title = 'With some valid HTML';
  const code = `
  import React, { PropTypes } from 'react';
  import { Accordeon, Panel, Nav, Content } from 'react-accordeon';

  function ExampleOne(props) {
    return (
      <Accordeon>
        <Panel key="panel1">
          <Nav>Header 1</Nav>
          <Content>
            <img src="https://placekitten.com/g/500/500" alt="kitten" />
          </Content>
        </Panel>
        <Panel key="panel2">
          <Nav>Header 2</Nav>
          <Content>
            <div>
              <p><strong>Why do we use it?</strong></p>
              <p>
                It is a long established fact that a reader will be distracted by
                 the readable content of a page when looking at its layout. The
                 point of using Lorem Ipsum is that it has a more-or-less normal
                 distribution of letters, as opposed to using 'Content here,
                 content here', making it look like readable English.
              </p>
            </div>
          </Content>
        </Panel>
      </Accordeon>
    );
  }
`;
  const accordeon = (
    <Accordeon>
      <Panel key="panel1">
        <Nav>Header 1</Nav>
        <Content>
          <img src="https://placekitten.com/g/500/500" alt="kitten" />
        </Content>
      </Panel>
      <Panel key="panel2">
        <Nav>Header 2</Nav>
        <Content>
          <div>
            <p><strong>Why do we use it?</strong></p>
            <p>
              It is a long established fact that a reader will be distracted by
               the readable content of a page when looking at its layout. The
               point of using Lorem Ipsum is that it has a more-or-less normal
               distribution of letters, as opposed to using 'Content here,
               content here', making it look like readable English.
            </p>
          </div>
        </Content>
      </Panel>
    </Accordeon>
  );
  return (
    <Base title={title} code={code} accordeon={accordeon} description="" anchor="valid-html" />
  );
};

export default ReactComponent;
