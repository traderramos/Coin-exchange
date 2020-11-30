import React, { Component } from 'react'
import logo from './logo.svg';
import styled from 'styled-components';


const Img= styled.img`
    height: 10rem;
    pointer-events: none;
`;
 
 const Header= styled.header`
 background-color: #282c30;
    min-height: 25vh;
    display: flex;
    flex-direction: row;
    align-items: right;
    justify-content: flex-start;
    color: brown;
 `;

 const H1= styled.h1`
 font-size: 5rem;
 align-items: right;
 `;
  

export default class ExchangeHeader extends Component {
    render() {
        return (
            
            <Header>
            <Img src={logo} alt="React logo"/>
            <H1>
             Coin Exchange
            </H1>              
          </Header> 
    
        )
    }
}
