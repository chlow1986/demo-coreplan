import React from "react";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getContent } from "../redux/ContentSlice";

const Container = styled("div")`
  width: 30%;
`;

const PreviewContainer: React.FC<any> = () => {
  const contentState = useSelector(getContent);
  const {content} = contentState;

  return (
    <Container>
      <h3>{content.headline}</h3>
      <ul>
        {content.bullets?.map((bullet) => {
          return <li key={bullet.id}>{bullet.text}</li>;
        })}
      </ul>
    </Container>
  );
};

export default PreviewContainer;
