import * as React from "react";
import styled from "styled-components";

const Li = styled("li")`
  margin: 10px 0;
`;

const Anchor = styled("a")`
  margin-top: 20px;
`;

const Img = styled("img")`
  max-width: 600px;
`;

export const Instructions: React.FC<any> = (props) => {
  return (
    <>
      <h1>Hi there</h1>
      <p>
        This is a test to judge your familiarity with React. We will be looking
        at your solution as well your code quality.
      </p>
      <p>
        It's based on a common use-case of building a no-code platform for
        personalization.
      </p>
      <ul>
        <Li>
          In the area below, implement the following:
          <ul>
            <Li>
              <b>Bullet Point Component</b>: allows the end-user to preview what
              the final product will look like.
            </Li>
            <Li>
              <b>Bullet Point Editor</b>: allows the end-user to easily make
              changes with a WYSIWYG interface. User must be able to:
              <ul>
                <Li>
                  Modify the headline (with real-time preview in the Bullet
                  Point Component)
                </Li>
                <Li>Add a new bullet point</Li>
                <Li>
                  Modify a bullet point (with real-time preview in the Bullet
                  Point Component)
                </Li>
                <Li>Delete a bullet point</Li>
              </ul>
            </Li>
          </ul>
        </Li>
        <Li>
          Reference Design <small>(click to view)</small>:
        </Li>
        <a
          href="https://d3p3a214b6u455.cloudfront.net/images/assessment/preview.jpg"
          target="_blank"
          rel="noreferrer"
        >
          <Img
            src="https://d3p3a214b6u455.cloudfront.net/images/assessment/preview.jpg"
            alt="Example"
          />
        </a>
        <Li>
          <b>Bonus points:</b> The bullet points should initially be populated
          with the emails from the following API and read from
          Redux:&nbsp;&nbsp;
          <Anchor
            href="https://reqres.in/api/users?page=2"
            target="_blank"
            rel="noreferrer"
          >
            https://reqres.in/api/users?page=2
          </Anchor>
        </Li>
      </ul>
    </>
  );
};
