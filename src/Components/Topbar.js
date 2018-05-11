import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Topbarwrapper = styled.div`
  width: 100%;
  height: 90px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 350px) {
    flex-direction: column;
    height: 50px;
    justify-content: space-between;
  }
`;

const Name = styled(Topbarwrapper)`
  font-size: 30px;
  padding-right: 20px;
  padding-left: 30px;
  width: 140px;
  text-align: left;
  font-family: 'Josefin Slab', serif;
  letter-spacing: 1px;
  @media (max-width: 350px) {
    flex-grow: 2;
    width: 100%;
    font-size: 18px;
  }
`;

const Tools = styled(Topbarwrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  @media (max-width: 350px) {
    width: 100%;
    justify-content: space-around;
  }
`;

const Toolbutton = styled(Link)`
  text-decoration: unset;
  margin: 20px;
  font-size: 20px;
  color: rgb(160, 160, 160);
  cursor: pointer;
  transition: color 0.2s;
  font-family: 'Josefin Slab', serif;
  &:hover {
    color: black;
    transition: color 0.4s;
  }
  @media (max-width: 350px) {
    font-size: 15px;
  }
`;

const Line = styled.div`
  width: 2px;
  background-color: rgb(160, 160, 160);
  height: 20px;
`;

const Topbar = () => (
  <Topbarwrapper>
    <Name>Karl Chuang</Name>
    <Tools>
      <Toolbutton to='/about'>About</Toolbutton>
      <Line />
      <Toolbutton to='/project'>Project</Toolbutton>
    </Tools>
  </Topbarwrapper>
);

export default Topbar;
