import React from 'react';

import Base from '../base/Base';
import { Accordeon, Panel, Nav, Content } from 'react-accordeon';

const ReactComponent = (props) => {
  const title = 'Accordeon with plain strings in the Nav and Content';
  const code = `
  import React, { PropTypes } from 'react';
  import { Accordeon, Panel, Nav, Content } from 'react-accordeon';

  function ExampleOne(props) {
    return (
      <Accordeon>
        <Panel key="panel1">
          <Nav>Question 1</Nav>
          <Content>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages.
          </Content>
        </Panel>
        <Panel key="panel2">
          <Nav>Question 2</Nav>
          <Content>
            There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which
            don't look even slightly believable. If you are going to
            use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200
            Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable.
            The generated Lorem Ipsum is therefore always free from
            repetition, injected humour, or non-characteristic words etc.
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
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages.
        </Content>
      </Panel>
      <Panel key="panel2">
        <Nav>Header 2</Nav>
        <Content>
          There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which
          don't look even slightly believable. If you are going to
          use a passage of Lorem Ipsum, you need to be sure there
          isn't anything embarrassing hidden in the middle of text.
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true
          generator on the Internet. It uses a dictionary of over 200
          Latin words, combined with a handful of model sentence
          structures, to generate Lorem Ipsum which looks reasonable.
          The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.
        </Content>
      </Panel>
    </Accordeon>
  );
  return (
    <Base title={title} code={code} accordeon={accordeon} description="" anchor="strings" />
  );
};

export default ReactComponent;
