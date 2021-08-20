import React, {useState} from 'react';
import './UserLogin.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default function UserLogin() {
  const clientId = "193201313440-ldl5s0r61sifmp0ro900de07bpjcpjsn.apps.googleusercontent.com"
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log('Login success', res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  }

  const onFailureSuccess = (res) => {
    console.log("Login failed", res);
  }

  const onSignoutSuccess = () => {
    alert("You have signed out successfully");
    setShowLoginButton(true);
    setShowLogoutButton(false);
  }

    return (
      <div className="login-box">
      <h2>Login with Google</h2>
        { showLoginButton ?

        <GoogleLogin
          clientId = {clientId}
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onFailureSuccess}
          isSignedIn={true}
          cookiePolicy={'single_host_origin'}
        /> : null
        }

        { showLogoutButton ?
        <GoogleLogout
          clientId = {clientId}
          buttonText = "Logout"
          onLogoutSuccess = {onSignoutSuccess}
        >
        </GoogleLogout>: null
        }
      </div>
    )

}
