import React from 'react';
import styled from 'styled-components';
import Logo from '../img/logo.jpg';
import { Button } from '@material-ui/core';
import { auth, provider } from '../features/firebase';

function Login() {

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error)=>alert(error.message));
  }

  return (
    <LoginContainer>
      <LoginContainerInner>
        <img src={Logo} alt="" />
        <h1> Sign in </h1>
        <p> Slack community </p>
        <Button onClick={signIn}>
          Sign in with Google
        </Button>
      </LoginContainerInner>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  background-color: #f8f8f8;
`;

const LoginContainerInner = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48;
    color: white;
  }

  > button:hover {
    color: white !important;
    background-color: #0a8d48;
  }
`;