import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// import HomeContainer from '../Containers/HomeContainer';
import Topbar from './Topbar';
import About from './About';
import Project from './Project';

const Rootwrapper = styled.div`
  width: inherit;
  height: inherit;
  text-align: center;
  flex-direction: column;
`;

const Topfix = styled.div`
  width: 100%;
  position: fixed;
  background-color: rgba(235, 235, 235, 0.8);
  box-shadow: 0px 4px 21px -1px #ccc;
  @media (max-width: 350px) {
    height: 50px;
    width: 100%;
  }
`;

const Contentblock = styled.div`
  padding: 60px;
  padding-top: 140px;
  @media (max-width: 350px) {
    padding-top: 75px;
  }
`;


const Root = () => (
  <BrowserRouter>
    <Rootwrapper>
      <Topfix>
        <Topbar />
      </Topfix>
      <Contentblock>
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/project' component={Project} />          
        </Switch>
      </Contentblock>
    </Rootwrapper>
  </BrowserRouter>
);

export default Root;
