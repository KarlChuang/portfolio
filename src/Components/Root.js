import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// import HomeContainer from '../Containers/HomeContainer';

const Rootwrapper = styled.div`
  width: inherit;
  height: inherit;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Root = () => (
  <Rootwrapper>
    Hi!!!
  </Rootwrapper>
);

export default Root;
