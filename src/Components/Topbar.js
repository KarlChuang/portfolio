import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Topfix = styled.div`
  width: 100%;
  position: fixed;
  background-color: rgba(235, 235, 235, 0.8);
  box-shadow: 0px 4px 21px -1px #ccc;
  ${
    props => props.page == 'about' ? `
      height: 100%;
      @keyframes Spandown {
        0% {
          height: 90px;
        }
        100% {
          height: 100%;
        }
      }
      animation: Spandown 0.5s ease-in-out;
    ` : `
    `
  };
`;

const Topbarwrapper = styled.div`
  width: 100%;
  text-align: center; 
  display: flex;
  align-items: center;
  ${
    props => props.page == 'about' ? `
      flex-direction: column-reverse;
      justify-content: flex-start;
      height: 100%;
      @keyframes Spanwrapper {
        0%, 50% {
          height: 90px;
          flex-direction: row;
          justify-content: space-around;
        }
        51%, 100% {
          flex-direction: column-reverse;
          justify-content: flex-start;
          height: 100%;
        }
      }
      animation: Spanwrapper 1s ease-in-out;
    ` : `
      height: 90px;
      flex-direction: row;
      justify-content: space-around;
      @media (max-width: 350px) {
        flex-direction: column;
        height: 40px;
        justify-content: space-between;
      }
    `
  }; 
`;

const Name = styled.div`
  color: black;
  display: flex;
  justify-content: space-around;
  padding-right: 20px;
  padding-left: 30px;
  font-family: 'Josefin Slab', serif;
  letter-spacing: 1px;
  cursor: default;
  ${
    props => props.page == 'about' ? `
      @keyframes Spanname {
        0% {
          flex-grow: 0;
          text-align: left;
          width: 140px;
          font-size: 30px;
          padding-top: 0;
          opacity: 1;
        }
        40%, 50% {
          flex-grow: 0;
          text-align: left;
          width: 140px;
          font-size: 30px;
          padding-top: 0;
          opacity: 0;
        }
        51% {
          flex-grow: 1;
          width: 80%;
          font-size: 60px;
          padding-top: 100px;
          text-align: center;
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      animation: Spanname 1s ease-in-out;
      flex-grow: 1;
      width: 80%;
      font-size: 60px;
      padding-top: 100px;
      text-align: center;
      @media (max-width: 420px) {
        font-size: 40px;
        padding-top: 30px;
      }
    ` : `
      text-align: left;
      width: 140px;
      font-size: 30px;      
      @media (max-width: 350px) {
        display: none;
        flex-grow: 1;
        width: 100%;
        font-size: 18px;
      }
    `
  };
`;

const Tools = styled(Topbarwrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  ${
    props => props.page == 'about' ? `
      flex-grow: 0;
      height: 90px;
      @keyframes Spantools {
        0%, 50% {
          flex-grow: 1;
        }
        51%, 100% {
          flex-grow: 0;
          height: 90px;
        }
      }
      animation: Spantools 1s ease-in-out;
    ` : `
      @media (max-width: 350px) {
        width: 100%;
        justify-content: space-around;
      }
    `
  };
`;

const Toolbutton = styled(Link)`
  text-decoration: unset;
  margin: 20px;
  font-size: 20px;
  color: ${props => (props.toggle == 1 ? 'black' : 'rgb(160, 160, 160)')};
  cursor: ${props => (props.toggle == 1 ? 'default' : 'pointer')};
  transition: color 0.2s;
  font-family: 'Josefin Slab', serif;
  &:hover {
    color: black;
    transition: color 0.4s;
  }
  @media (max-width: 350px) {
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Line = styled.div`
  width: 2px;
  background-color: rgb(160, 160, 160);
  height: 20px;
`;

const Info = styled.div`
  flex-grow: 6;
  @keyframes Spaninfo {
    0%, 50% {
      width: 0;
      opacity: 0;
      display: none;
    }
    51% {
      width: auto;      
      opacity: 0;
      display: default;
    }
    100% {
      opacity: 1;
    }
  }
  animation: Spaninfo 1s ease-in-out;
  ${
    props => props.page == 'about' ? `
    ` : `
    `
  }
`;

const Topbar = ({ page }) => (
  <Topfix page={page}>
    <Topbarwrapper page={page}>
      {
        (page == 'about') ? (<Info>Info</Info>) : null
      }
      <Name page={page}>Karl Chuang</Name>
      <Tools page={page}>
        <Toolbutton toggle={page=='about' ? 1 : 0} to='/'>About</Toolbutton>
        <Line />
        <Toolbutton toggle={page=='project' ? 1 : 0} to='/project'>Projects</Toolbutton>
      </Tools>
    </Topbarwrapper>
  </Topfix>
);

export default Topbar;
