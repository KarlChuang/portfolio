import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// import HomeContainer from '../Containers/HomeContainer';
import TopbarContainer from '../Containers/Topbar';
import Project from '../Containers/Project';
import Dummy from '../Containers/Dummy';

const Rootwrapper = styled.div`
  width: inherit;
  height: inherit;
  text-align: center;
  flex-direction: column;
`;

const Contentblock = styled.div`
  padding: 60px;
  padding-top: 140px;
  @media (max-width: 420px) {
    padding-top: 75px;
  }
`;

const Root = () => (
  <BrowserRouter>
    <Rootwrapper>
      <TopbarContainer />
      <Contentblock>
        <Switch>
          <Route exact path='/' component={Dummy} />
          <Route exact path='/project' component={Project} />          
        </Switch>
      </Contentblock>
    </Rootwrapper>
  </BrowserRouter>
);

export default Root;
