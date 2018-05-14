import React, { Component } from 'react';
import styled from 'styled-components';

const Contentwrapper = styled.div`
  width: inherit;
  text-align: left;
  font-size: 24px;
  font-family: 'Josefin Slab', serif;
  overflow: scroll;
  @keyframes SpanContentUp {
    0%, 50% {opacity: 0;}
    100% {opacity: 1;}
  }
  animation: SpanContentUp 1s ease-in-out;
`;

class Project extends Component {
  constructor(props) {
    super(props);
    props.projectRequest();
  }
  render() {
    return(
      <Contentwrapper>
        Project
      </Contentwrapper>
    );
  }
}

export default Project;
