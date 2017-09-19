import React, { Component, } from 'react';
import styles from './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { helloToggle } from '../actions';
import styled from 'styled-components';

const Heading = ({ className, children, text }) => <h2 className={className}>{text}</h2>;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: red;
`;

const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
`;

const StyledHeading = styled(Heading)`
    color: palevioletred;
    font-weight: bold;
`;

class App extends Component {
  componentDidMount(){
    console.log('CDM')
    fetch(`/api/test`).then(x => console.log('FETCH', x))
  }
  render() {
    console.log(this.props);
    return (
      <div className="app">
        <StyledHeading text="My Hello here"/>
        <StyledLink>Styled, exciting Link</StyledLink>
        <Title>
          Hello World, this is my first styled component!
        </Title>
        <h2 onClick={this.props.helloToggle}>{this.props.hello}</h2>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ helloToggle }, dispatch);

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, mapDispatchToProps)(App);
