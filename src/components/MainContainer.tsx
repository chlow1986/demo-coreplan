import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import PreviewContainer from "./PreviewContainer";
import EditorContainer from "./EditorContainer";
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { loadContentAsync } from "../redux/ContentSlice";
import { useAppDispatch } from "../app/hooks";


const Container = styled("div")`
  border: 1px solid grey;
  padding: 15px;
  display: flex;
  flex-direction: row;
  background-color: #f9f9f9;
`;

export const MainContainer: React.FC<any> = (props) => {
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    dispatch(loadContentAsync());
  }, [])

  return (
    <Container>
      <PreviewContainer />
      <EditorContainer />
    </Container>
  );
};
