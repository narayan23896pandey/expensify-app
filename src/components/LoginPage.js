import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { startLoginFacebook } from '../actions/auth';
import { startLoginGithub } from '../actions/auth';

export const LoginPage = ({ startLogin, startLoginFacebook, startLoginGithub }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control.</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
      <button className="button" onClick={startLoginGithub}>Login with Github</button>
      <button className="button" onClick={startLoginFacebook}>Login with facebook</button>


    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLoginGithub: () => dispatch(startLoginGithub()),
  startLoginFacebook: () => dispatch(startLoginFacebook())

});

export default connect(undefined, mapDispatchToProps)(LoginPage);
